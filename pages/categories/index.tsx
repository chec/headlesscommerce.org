import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";

import { getPageBySlug } from "../../lib/queries";
import { gql, graphcmsClient } from "../../lib/graphcms";

import Layout from "../../components/layout";
import Categories from "../../components/categories";

const GET_CATEGORIES_WITH_SERVICES = gql`
  {
    categories {
      id
      name
      slug
      services {
        id
      }
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const { page } = await getPageBySlug("categories");
  const { categories } = await graphcmsClient.request(
    GET_CATEGORIES_WITH_SERVICES
  );

  return {
    props: {
      page,
      categories,
    },
    revalidate: 5,
  };
};

const MyStackPage = ({ page, categories }) => {
  return (
    <Layout {...page}>
      <NextSeo title="Browse by category" />

      <div className="max-w-5xl mx-auto">
        <Categories items={categories} />
      </div>
    </Layout>
  );
};

export default MyStackPage;
