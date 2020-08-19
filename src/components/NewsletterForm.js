import React from "react";
import { useForm } from "react-hook-form";

import useSendData from "../hooks/useSendData";
import EmailIcon from "../svg/email.svg";

const NewsletterForm = () => {
  const {
    sendData,
    error: sendDataError,
    submitted: sendDataSubmitted,
  } = useSendData("/api/subscribe");
  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
  } = useForm();

  const onSubmit = async (values) => await sendData(values);

  return (
    <div className="mt-6 md:my-6 border-t py-3 md:pt-6">
      <div className="flex items-center mb-3">
        <EmailIcon className="-ml-px w-6 h-5 fill-current mr-3" />
        <h3 className="text-primary font-semibold tracking-wider text-xs uppercase">
          {sendDataSubmitted ? "Subscribed!" : "Subscribe to updates"}
        </h3>
      </div>

      {sendDataSubmitted ? null : (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <input
            type="email"
            name="email"
            className="appearance-none border border-gray-300 focus:outline-none bg-white rounded px-3 py-2 block w-full flex-grow sm:text-sm h-10 mb-3"
            placeholder="Your email"
            ref={register({
              required: true,
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Field is invalid",
              },
            })}
          />

          <button
            type="submit"
            className="bg-secondary hover:bg-primary focus:outline-none uppercase text-sm px-4 py-2 h-10 font-semibold text-white rounded block w-full"
            disabled={isSubmitting}
          >
            Sign me up
          </button>

          {sendDataError && (
            <span className="text-red-700 text-sm my-3">{sendDataError}</span>
          )}
        </form>
      )}
    </div>
  );
};

export default NewsletterForm;
