import cc from "classcat";

import { useLayoutState } from "../context/layout";

import Agency from "./agency";

const Agencies = ({ items }) => {
  const { isGrid } = useLayoutState();

  return (
    <div
      className={cc([
        "py-8 grid md:grid-cols-2 gap-8",
        {
          "lg:grid-cols-3": isGrid,
        },
      ])}
    >
      {items.map(Agency)}
    </div>
  );
};

export default Agencies;
