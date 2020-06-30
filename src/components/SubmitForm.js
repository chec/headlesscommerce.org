import React from "react";
import { useForm } from "react-hook-form";

import useSendData from "../hooks/useSendData";

const SubmitForm = ({ onClose }) => {
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
    <div className="w-full shadow rounded bg-white mb-4 p-6 md:p-12 relative">
      <button
        className="appearance-none p-4 absolute top-0 right-0 text-text-400 outline-none focus:outline-none"
        onClick={onClose}
      >
        <svg
          className="fill-current w-4 h-4 hover:text-secondary"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      </button>

      <div className="flex items-center">
        <div className="w-full text-center">
          <div className="pb-6 md:pb-12">
            <h3 className="font-medium text-xl text-secondary group-hover:text-secondary mb-1 inline-flex items-center">
              {sendDataSubmitted
                ? `Great suggestion!`
                : `Already using something you don't see here?`}
            </h3>

            <p className="text-sm leading-5 text-pale-sky group-hover:text-primary">
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
                  className="appearance-none border border-gray-300 focus:outline-none bg-white rounded px-3 py-2 block w-full flex-grow sm:text-sm h-10"
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
                  className="appearance-none border border-gray-300 focus:outline-none bg-white rounded px-3 py-2 block w-full flex-grow sm:text-sm h-10"
                  placeholder="Email address"
                  ref={register({
                    required: true,
                  })}
                />
              </div>

              <div className="px-3">
                <button
                  type="submit"
                  className="bg-primary hover:bg-secondary focus:outline-none uppercase text-sm px-4 py-2 h-10 font-semibold text-white rounded block w-full"
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
