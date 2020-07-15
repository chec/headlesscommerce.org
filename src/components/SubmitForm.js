import React from "react";
import { useForm } from "react-hook-form";

import useSendData from "../hooks/useSendData";

const SubmitForm = () => {
  const {
    sendData,
    error: sendDataError,
    submitted: sendDataSubmitted,
  } = useSendData("/.netlify/functions/submit");
  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
  } = useForm();

  const onSubmit = async (values) => await sendData(values);

  return (
    <div className="site-gradient w-full shadow rounded bg-white mb-4 p-6 md:p-12 relative">
      <div className="flex items-center">
        <div className="w-full text-center">
          <div className="pb-6 md:pb-12">
            <h3 className="font-medium text-xl text-white mb-1 inline-flex items-center">
              {sendDataSubmitted
                ? `Great suggestion!`
                : `Already using something you don't see here?`}
            </h3>

            <p className="text-sm leading-5 text-white opacity-75">
              {sendDataSubmitted
                ? `Thanks for your suggestion. We'll review, and publish.`
                : `Suggest something new for others to find.`}
            </p>
          </div>

          {sendDataError && (
            <div className="text-red-700 text-sm mb-6">{sendDataError}</div>
          )}

          {sendDataSubmitted ? null : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full md:flex md:items-center"
            >
              <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                <input
                  type="url"
                  name="url"
                  id="url"
                  className="appearance-none border border-white focus:outline-none bg-white rounded px-3 py-2 block w-full flex-grow sm:text-sm h-10"
                  placeholder="Site URL"
                  ref={register({
                    required: true,
                  })}
                />
              </div>

              <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="appearance-none border border-white focus:outline-none bg-white rounded px-3 py-2 block w-full flex-grow sm:text-sm h-10"
                  placeholder="Email address"
                  ref={register({
                    required: true,
                  })}
                />
              </div>

              <div className="px-3">
                <button
                  type="submit"
                  className="bg-primary focus:outline-none uppercase text-sm px-4 py-2 h-10 font-semibold text-white rounded block w-full"
                  disabled={isSubmitting}
                >
                  Add
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubmitForm;
