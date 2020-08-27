import React, { useState } from "react";
import classnames from "classnames";
import { RefinementList } from "react-instantsearch-dom";

export default function CustomRefinementList({ icon, title, ...props }) {
  const [open, setOpen] = useState(true);
  const toggle = () => setOpen(!open);

  const wrapperClass = classnames("w-full", {
    "mb-3 md:mb-6": open,
    "md:mb-3": !open,
  });

  const filterClass = classnames(null, {
    hidden: !open,
    block: open,
  });

  return (
    <div className={wrapperClass}>
      {title && (
        <div
          onClick={toggle}
          className="group w-full flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center">
            {icon}
            <h3 className="text-primary font-semibold tracking-wider text-xs uppercase">
              {title}
            </h3>
          </div>

          <button className="text-gray-400 group-hover:text-primary ml-auto appearance-none outline-none focus:outline-none p-1 -mr-2">
            {open ? (
              <svg
                className="w-8 md:w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z" />
              </svg>
            ) : (
              <svg
                className="w-8 md:w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 11.828l-2.828 2.829-1.415-1.414L12 9l4.243 4.243-1.415 1.414L12 11.828z" />
              </svg>
            )}
          </button>
        </div>
      )}

      <div className={filterClass}>
        <RefinementList {...props} />
      </div>
    </div>
  );
}
