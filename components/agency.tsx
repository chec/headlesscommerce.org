import Link from "next/link";
import cc from "classcat";

import { useLayoutState } from "../context/layout";

const Service = (props) => {
  if (!props.id) return null;

  const { id, logo, name, subTitle, locations, url } = props;

  const { isGrid, isList } = useLayoutState();

  return (
    <article
      key={id}
      className={cc([
        "p-8 bg-white rounded relative shadow group overflow-hidden",
        {
          "md:py-16 text-center transition duration-150 ease-in-out": isGrid,
          "md:pt-12 md:pb-8": isList,
        },
      ])}
    >
      <div
        className={cc([
          {
            "flex flex-col md:flex-row md:space-x-6": isList,
          },
        ])}
      >
        <span className="absolute top-0 right-0 mt-4 mr-4 z-20 flex items-center justify-end"></span>

        <div className="mb-4">
          {logo ? (
            <img
              src={logo.url}
              className="inline-block"
              style={{ maxWidth: 200, maxHeight: 50 }}
            />
          ) : null}
        </div>

        <div>
          <div>
            <h3 className="text-xl leading-7 font-semibold text-gray-900">
              {name}
            </h3>
            <p className="mt-1 text-gray-400 text-sm leading-6">{subTitle}</p>
            {locations && (
              <div className="pt-2 space-x-1">
                {locations.map((loc, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2.5 my-1.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-gray-100 border border-transparent text-gray-400 transition duration-100 ease-in-out"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            )}

            <div
              className={cc([
                {
                  "absolute inset-x-0 bottom-0 pb-8 px-8 z-20 translate-y-32 group-hover:translate-y-0 transform transition duration-150 ease-in-out delay-75": isGrid,
                  "pt-4": isList,
                },
              ])}
            >
              <a
                href={url}
                rel="nofollow noopener noreferrer"
                target="_blank"
                className={cc([
                  "relative inline-flex items-center px-3 py-2 rounded-md border border-gray-200 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-black focus:z-10 focus:outline-none active:bg-gray-100 active:text-black transition ease-in-out duration-150",
                  {
                    "shadow-lg": isGrid,
                  },
                ])}
              >
                Visit
              </a>
            </div>
          </div>

          {isGrid && (
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-purple-700 opacity-0 group-hover:opacity-50 w-full h-full transform transition duration-100 ease-in-out z-10"></div>
          )}
        </div>
      </div>
    </article>
  );
};

export default Service;
