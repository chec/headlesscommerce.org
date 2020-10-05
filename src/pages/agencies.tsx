import { GetStaticProps } from "next";
import Select from "react-select";

import { getPageBySlug, getAllAgencies } from "../lib/queries";

import Layout from "../components/layout";
import LayoutSwitcher from "../components/layout-switcher";
import Agencies from "../components/agencies";

export const getStaticProps: GetStaticProps = async () => {
  const { page } = await getPageBySlug("agencies");
  const { agencies } = await getAllAgencies();

  return {
    props: {
      page,
      agencies,
    },
    revalidate: 5,
  };
};

export const AgenciesPage = ({ page, agencies }) => {
  // const locations = agencies.reduce((all = [], { locations }) => {
  //   if (!locations) return;

  //   if (all.includes())

  //   return [...all, ...locations];
  // }, []);

  // const [selectedOption, setSelectedOption] = useState([]);
  // const filteredAgencies = agencies.filter((service) => {
  //   if (!selectedOption || selectedOption.length === 0) return true;

  //   return selectedOption.some(
  //     (option) => service.category.id === option.value
  //   );
  // });

  return (
    <Layout {...page}>
      <div className="max-w-5xl mx-auto">
        <div className="py-8 border-b border-gray-200 flex items-center justify-between z-30 relative">
          {/* <Select
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
          /> */}

          <div className="flex items-center justify-end">
            <LayoutSwitcher />
          </div>
        </div>

        <Agencies items={agencies} />
      </div>
    </Layout>
  );
};

export default AgenciesPage;