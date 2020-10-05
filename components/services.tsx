import cc from "classcat";

import { useLayoutState } from "../context/layout";

import * as cards from "./cards";

const Services = ({ items }) => {
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
      {items.map(({ __typename = "Service", ...service }, index) => {
        const Component = cards[__typename];

        return <Component key={index} {...service} />;
      })}
    </div>
  );
};

export default Services;
