import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import {
  useBookmarksState,
  useBookmarksDispatch,
} from "../context/BookmarksContext";

export default function Hit({ hit }) {
  const { addBookmark, removeBookmark } = useBookmarksDispatch();
  const { isBookmarked } = useBookmarksState();

  if (!hit) return null;

  const { objectID, name, tagline, url: hitUrl, photo, extras } = hit;
  const bookmarked = isBookmarked(objectID);
  const url = `${hitUrl}?ref=headlesscommerce.org`;

  return (
    <article
      key={objectID}
      className="w-full flex items-center h-full focus:outline-none focus:bg-athens-gray hover:bg-athens-gray"
    >
      <OutboundLink
        href={url}
        className="group relative block w-full p-4 md:p-6"
        rel="nofollow noopener noreferrer"
        target="_blank"
      >
        <div className="flex items-center">
          {photo && (
            <img
              src={photo}
              className="inline-block w-8 md:w-12 mr-6"
              alt={name}
            />
          )}

          <div className="flex-grow md:pr-3">
            <div className="inline-flex flex-col md:flex-row md:items-center mb-1">
              <h2 className="font-medium text-primary group-hover:text-secondary">
                {name}
              </h2>

              <span className="hidden md:inline">
                {extras.map((e, index) => (
                  <span
                    key={index}
                    className="flex-shrink-0 inline-block px-2 py-px text-white text-xs leading-4 font-medium bg-gray-600 rounded-full ml-2"
                  >
                    {e}
                  </span>
                ))}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">{tagline}</p>
          </div>

          <svg
            className="hidden md:inline fill-current text-gray-400 w-6 h-6 flex-shrink-0 invisible md:group-hover:visible"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>

          {/* <span className="w-2 h-2 ml-2 rounded-full flex-shrink-0 inline-block absolute right-0 bg-secondary" /> */}
        </div>
      </OutboundLink>

      <div className="flex items-center justify-center pl-3 pr-6">
        <button
          className="appearance-none p-3 text-gray-500 hover:text-secondary focus:outline-none focus:text-secondary"
          onClick={() =>
            bookmarked ? removeBookmark(objectID) : addBookmark(hit)
          }
        >
          {bookmarked ? (
            <svg
              className="text-secondary fill-current w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v18l-8-4-8 4V2z" />
            </svg>
          ) : (
            <svg
              className="fill-current w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v18l-8-4-8 4V2zm2 0v15l6-3 6 3V2H4z" />
            </svg>
          )}
        </button>
      </div>
    </article>
  );
}
