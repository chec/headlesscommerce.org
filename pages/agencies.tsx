import { GetStaticProps } from "next";
import shuffle from "lodash.shuffle";
import { NextSeo } from "next-seo";

import { getPageBySlug, getAllAgencies } from "../lib/queries";

import Layout from "../components/layout";
import Agencies from "../components/agencies";

export const getStaticProps: GetStaticProps = async () => {
  const { page } = await getPageBySlug("agencies");
  const { agencies } = await getAllAgencies();

  return {
    props: {
      page,
      agencies: shuffle(agencies),
    },
    revalidate: 5,
  };
};

export const AgenciesPage = ({ page, agencies }) => {
  return (
    <Layout {...page}>
      <NextSeo title={page.title} />

      <div className="max-w-5xl mx-auto">
        <Agencies items={agencies} />
      </div>
    </Layout>
  );
};

export default AgenciesPage;
