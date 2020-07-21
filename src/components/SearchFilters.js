import React from "react";
import classnames from "classnames";
import { ClearRefinements } from "react-instantsearch-dom";

import { useNavigationState } from "../context/NavigationContext";
import CustomRefinementList from "./CustomRefinementList";
import EyeIcon from "../svg/eye.svg";
import FilterIcon from "../svg/filter.svg";
import NewsletterForm from "./NewsletterForm";

export default function SearchFilter() {
  const navState = useNavigationState();

  const wrapper = (state) =>
    classnames("pb-3 md:pb-0 border-b md:border-none mb-3 md:mb-8", {
      "hidden md:block": !navState[state],
      "block md:block": navState[state],
    });

  return (
    <div className="md:pt-6 sticky top-0 md:block">
      <div className={wrapper("filtersIsOpen")}>
        <div className="rounded bg-white md:bg-transparent shadow md:shadow-none p-3 md:p-0">
          <CustomRefinementList
            icon={<EyeIcon className="-ml-px w-6 h-5 fill-current mr-3" />}
            title="Show me"
            attribute="technology"
          />

          <CustomRefinementList
            icon={<FilterIcon className="-ml-px w-6 h-5 fill-current mr-3" />}
            title="Filter"
            attribute="categories"
            showMore
          />

          <CustomRefinementList
            icon={<FilterIcon className="-ml-px w-6 h-5 fill-current mr-3" />}
            title="Misc"
            attribute="extras"
          />

          <ClearRefinements />

          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}
