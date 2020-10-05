import React from "react";
import cc from "classcat";

import { useLayoutState, useLayoutDispatch } from "../context/layout";

import * as GridSVG from "../svg/grid.svg";
import * as ListSVG from "../svg/list.svg";

const buttonClass =
  "appearance-none focus:outline-none border-none p-2 flex items-center justify-center transition-none";

export default function LayoutSwitcher() {
  const { isList, isGrid } = useLayoutState();
  const { setToList, setToGrid } = useLayoutDispatch();

  return (
    <div className="flex items-center">
      <button
        onClick={setToGrid}
        className={cc([
          buttonClass,
          {
            "text-gray-900": isGrid,
            "text-gray-400": isList,
          },
        ])}
      >
        <GridSVG className="w-5 h-5" />
      </button>
      <button
        onClick={setToList}
        className={cc([
          buttonClass,
          {
            "text-gray-400": isGrid,
            "text-gray-900": isList,
          },
        ])}
      >
        <ListSVG className="w-5 h-5" />
      </button>
    </div>
  );
}
