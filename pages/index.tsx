import { useState } from "react";
import { GetStaticProps } from "next";
import Select from "react-select";
import shuffle from "lodash.shuffle";
import Link from "next/link";
import { NextSeo } from "next-seo";

import { getPageBySlug, getCategories, getAllServices } from "../lib/queries";

import Layout from "../components/layout";
import LayoutSwitcher from "../components/layout-switcher";
import Services from "../components/services";

export const getStaticProps: GetStaticProps = async () => {
  const { page } = await getPageBySlug("index");
  const { categories } = await getCategories();
  const { services } = await getAllServices();

  return {
    props: {
      page,
      services: shuffle([
        ...services,
        // { __typename: "Newsletter" },
        { __typename: "About" },
      ]),
      categories: categories.map(({ id, name }) => ({
        value: id,
        label: name,
      })),
    },
    revalidate: 5,
  };
};

const IndexPage = ({ page, services, categories }) => {
  const [currentFilters, setCurrentFilters] = useState([]);

  const filteredServices = services.filter((service) => {
    if (!currentFilters || currentFilters.length === 0) return true;

    return currentFilters.some(({ value }) =>
      service.categories
        ? service.categories.some(({ id }) => id === value)
        : false
    );
  });

  return (
    <Layout
      {...page}
      cta={
        <Link href="/about">
          <a className="relative inline-flex items-center text-center px-3 py-2 rounded-md border border-gray-200 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-black focus:z-10 focus:outline-none active:bg-gray-100 active:text-black transition ease-in-out duration-150">
            Learn more
          </a>
        </Link>
      }
    >
      <NextSeo title="Build your next commerce stack" />

      <div className="md:sticky md:top-0 bg-gray-50 py-8 z-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between z-30">
            <Select
              isMulti
              id="categories"
              inputId="categories"
              instanceId="categories"
              name="categories"
              options={categories}
              className="flex-1 mr-6"
              placeholder="Filter by category"
              defaultValue={currentFilters}
              onChange={setCurrentFilters}
            />

            <div className="flex items-center justify-end">
              <LayoutSwitcher />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto border-t border-gray-200">
        <Services items={filteredServices} />
      </div>
    </Layout>
  );
};

export default IndexPage;
