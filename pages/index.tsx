import { useState } from "react";
import { GetStaticProps } from "next";
import Select from "react-select";
import shuffle from "lodash.shuffle";

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
    <Layout {...page}>
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
