import React from "react";
import { Stats } from "react-instantsearch-dom";

import LayoutSwitcher from "./LayoutSwitcher";

export default function SearchSummary() {
  return (
    <div className="p-3 pr-1 md:px-6 md:pr-4 md:py-3 border-b border-gray-300 flex items-center justify-between">
      <Stats
        translations={{
          stats(nbHits) {
            return `${nbHits} matching resource${nbHits !== 1 ? "s" : ""}`;
          },
        }}
      />

      <LayoutSwitcher />
    </div>
  );
}
