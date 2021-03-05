import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import { graphcmsClient, gql } from "../../lib/graphcms";

import Layout from "../../components/layout";
import Service from "../../components/cards/service";

const GetCategories = gql`
  {
    categories {
      slug
    }
  }
`;

const GetCategory = gql`
  query GetCategory($slug: String!) {
    category(where: { slug: $slug }) {
      id
      name
      description {
        markdown
      }
      services {
        id
        name
        tagline
        url
        logo {
          url
        }
        includesFreePlan
      }
    }
  }
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const { categories } = await graphcmsClient.request(GetCategories);

  const paths = categories.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const {
      category: { services, ...category },
    } = await graphcmsClient.request(GetCategory, { slug: params.slug });

    return {
      props: {
        category,
        services,
      },
      revalidate: 5,
    };
  } catch (err) {
    return {
      props: {
        category: null,
        services: [],
      },
    };
  }
};

const CategoryPage = ({ category, services }) => {
  const router = useRouter();
  const { isFallback } = router.query;

  if (isFallback) return <Layout title="Fetching page" />;

  if (!isFallback && !category) return <Layout title="Not found" />;

  const { name, description } = category;

  const page = {
    title: name,
  };

  return (
    <Layout {...page} description={description?.markdown}>
      <NextSeo title={name} />

      <div className="max-w-5xl mx-auto">
        <div className="py-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(Service)}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
