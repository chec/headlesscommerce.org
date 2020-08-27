import React, { useState } from "react";

import SubmitForm from "./SubmitForm";

export default function WelcomeCard() {
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);

  const show = () => setShowSubmissionForm(true);
  const hide = () => setShowSubmissionForm(false);

  return showSubmissionForm ? (
    <SubmitForm onClose={hide} />
  ) : (
    <div className="bg-white w-full rounded shadow mb-4 p-6 md:p-12 relative">
      <div className="pb-6">
        <h3 className="font-medium text-xl md:text-2xl text-primary mb-2 inline-flex items-center">
          Headless Commerce Resources
        </h3>

        <p className="text-sm leading-loose text-gray-600">
          A community curated list of commerce products, services, podcasts,
          books and more. A heads-up for modern store builders.
        </p>
      </div>

      <div className="md:flex-grow flex justify-start items-center">
        <button
          type="button"
          className="appearance-none focus:outline-none text-white font-medium px-3 py-2 bg-secondary hover:bg-primary rounded text-sm mr-3"
          onClick={show}
        >
          Add Recommendation
        </button>
      </div>
    </div>
  );
}
