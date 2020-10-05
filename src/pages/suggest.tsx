import { GetStaticProps } from "next";
import { useForm } from "react-hook-form";

import { getPageBySlug } from "../lib/queries";
import useSendData from "../hooks/useSendData";

import Layout from "../components/layout";

export const getStaticProps: GetStaticProps = async () => {
  const { page } = await getPageBySlug("suggest");

  return {
    props: {
      page,
    },
    revalidate: 5,
  };
};

const SuggestPage = ({ page }) => {
  const {
    sendData,
    error: sendDataError,
    submitted: sendDataSubmitted,
  } = useSendData("/api/suggest");
  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
    errors,
  } = useForm();

  const onSubmit = async (values) => await sendData(values);

  return (
    <Layout {...page}>
      <div className="max-w-5xl mx-auto py-6 md:py-12 lg:py-24">
        {sendDataSubmitted ? null : (
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
            <div className="w-full pb-6">
              <label htmlFor="url" className="sr-only">
                Site URL
              </label>

              <input
                type="url"
                name="url"
                id="url"
                className="appearance-none border border-gray-200 focus:border-gray-500 text-lg focus:outline-none bg-white rounded px-3 py-2 w-full"
                placeholder="Site URL"
                ref={register({
                  required: "You must provide a URL",
                })}
              />
              {errors.url && (
                <span className="pt-2 inline-block text-red-500 text-sm">
                  {errors.url.message}
                </span>
              )}
            </div>

            <div className="w-full pb-6">
              <input
                type="email"
                name="email"
                id="email"
                className="appearance-none border border-gray-200 focus:border-gray-500 text-lg focus:outline-none bg-white rounded px-3 py-2 w-full"
                placeholder="Email address"
                ref={register({
                  required: "We use your email to notify about your suggestion",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "You must provide a valid email",
                  },
                })}
              />
              {errors.email && (
                <span className="pt-2 inline-block text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="bg-gradient-to-r from-red-600 to-indigo-600 focus:outline-none uppercase text-sm px-3 py-3 font-semibold text-white rounded block w-full"
                disabled={isSubmitting}
              >
                Add
              </button>
            </div>
          </form>
        )}
      </div>
    </Layout>
  );
};

export default SuggestPage;
