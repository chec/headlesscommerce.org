import React from "react";
import { Stats } from "react-instantsearch-dom";

export default function TextSearch() {
  return (
    // <div className="sticky top-0 z-50 bg-white w-full rounded overflow-hidden shadow mb-4 p-3">
    <div className="p-3 md:px-6 md:py-4 border-b border-gray-300 flex justify-between">
      <Stats
        translations={{
          stats(nbHits) {
            return `${nbHits} matching resource${nbHits !== 1 ? "s" : ""}`;
          },
        }}
      />
    </div>
  );
}
