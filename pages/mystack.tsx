import { useState } from "react";
import { GetStaticProps } from "next";
import Select from "react-select";
import { NextSeo } from "next-seo";

import { getPageBySlug } from "../lib/queries";
import { useBookmarksState } from "../context/bookmarks";

import Layout from "../components/layout";
import LayoutSwitcher from "../components/layout-switcher";
import Services from "../components/services";

export const getStaticProps: GetStaticProps = async () => {
  const { page } = await getPageBySlug("mystack");

  return {
    props: {
      page,
    },
    revalidate: 5,
  };
};

export const MyStackPage = ({ page }) => {
  const { bookmarks } = useBookmarksState();
  const categories = bookmarks.reduce((all = [], { category }) => {
    if (!category) return;

    const { id: value, name: label } = category;

    return [...all, { label, value }];
  }, []);

  const [selectedOption, setSelectedOption] = useState([]);
  const filteredServices = bookmarks.filter((service) => {
    if (!selectedOption || selectedOption.length === 0) return true;

    return selectedOption.some(
      (option) => service.category.id === option.value
    );
  });

  const hasResults = filteredServices.length > 0;

  return (
    <Layout
      {...page}
      subTitle={
        hasResults
          ? page.subTitle
          : "When add services to your stack, they'll appear here!"
      }
    >
      <NextSeo title="My Stack" />

      {hasResults && (
        <div className="max-w-5xl mx-auto">
          <div className="py-8 border-b border-gray-200 flex items-center justify-between z-30 relative">
            <Select
              isMulti
              id="categories"
              inputId="categories"
              instanceId="categories"
              name="categories"
              options={categories}
              className="flex-1 mr-6"
              placeholder="Filter by category"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
            />

            <div className="flex items-center justify-end">
              <LayoutSwitcher />
            </div>
          </div>

          <Services items={filteredServices} />
        </div>
      )}
    </Layout>
  );
};

export default MyStackPage;
