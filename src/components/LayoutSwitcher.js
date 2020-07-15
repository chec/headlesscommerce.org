import React from "react";
import classnames from "classnames";

import { useLayoutState, useLayoutDispatch } from "../context/LayoutContext";

const buttonClass =
  "appearance-none focus:outline-none border-none p-2 flex items-center justify-center transition-none";

export default function LayoutSwitcher() {
  const { isList, isGrid } = useLayoutState();
  const { setToList, setToGrid } = useLayoutDispatch();

  return (
    <div className="hidden md:flex md:items-center">
      <button
        onClick={setToList}
        className={classnames(buttonClass, {
          "text-gray-600": isGrid,
          "text-secondary": isList,
        })}
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M8 4h13v2H8V4zm-5-.5h3v3H3v-3zm0 7h3v3H3v-3zm0 7h3v3H3v-3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z" />
        </svg>
      </button>
      <button
        onClick={setToGrid}
        className={classnames(buttonClass, {
          "text-secondary": isGrid,
          "text-gray-600": isList,
        })}
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M22 12.999V20a1 1 0 0 1-1 1h-8v-8.001h9zm-11 0V21H3a1 1 0 0 1-1-1v-7.001h9zM11 3v7.999H2V4a1 1 0 0 1 1-1h8zm10 0a1 1 0 0 1 1 1v6.999h-9V3h8z" />
        </svg>
      </button>
    </div>
  );
}
