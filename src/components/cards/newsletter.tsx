import { useForm } from "react-hook-form";

import useSendData from "../../hooks/useSendData";

const NewsletterCard = () => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm();

  const {
    sendData,
    error: sendDataError,
    submitted: sendDataSubmitted,
  } = useSendData("/api/subscribe");

  const onSubmit = async (values) => await sendData(values);

  return (
    <article className="p-8 bg-white border-2 border-purple-800 rounded relative shadow group overflow-hidden flex items-center">
      <div className="relative z-20 text-center">
        <h3 className="text-xl md:text-2xl tracking-tight leading-tight font-extrabold text-transparent bg-gradient-to-r from-red-600 via-indigo-600 to-purple-700 bg-clip-text">
          Subscribe to our headless commerce digest newsletter
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="pt-6">
          <div className="pb-3">
            <input
              className="appearance-none bg-gray-100 rounded w-full p-3 text-gray-900 leading-tight focus:outline-none text-center"
              name="email"
              type="email"
              placeholder="Your email address"
              ref={register({
                required: true,
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Field is invalid",
                },
              })}
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-gradient-to-r from-red-600 to-indigo-600 focus:outline-none uppercase text-sm px-3 py-3 font-semibold text-white rounded block w-full"
              disabled={isSubmitting}
            >
              Sign me up
            </button>
          </div>
        </form>
      </div>
    </article>
  );
};

export default NewsletterCard;
