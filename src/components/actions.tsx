import Link from "next/link";
import cc from "classcat";

import { useLayoutState } from "../context/layout";
import { useBookmarksState, useBookmarksDispatch } from "../context/bookmarks";

export default function Actions(props) {
  const { id, url: externalUrl } = props;
  const { isGrid } = useLayoutState();
  const { addBookmark, removeBookmark } = useBookmarksDispatch();
  const { isBookmarked } = useBookmarksState();

  const bookmarked = isBookmarked(id);
  const url = `${externalUrl}?ref=headlesscommerce.org`;

  return (
    <span
      className={cc([
        "relative z-0 inline-flex rounded-md",
        {
          "shadow-lg": isGrid,
        },
      ])}
    >
      <button
        onClick={() => (bookmarked ? removeBookmark(id) : addBookmark(props))}
        type="button"
        className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-200 bg-white text-sm text-gray-500 hover:text-black focus:outline-none active:bg-gray-100 active:text-black transition ease-in-out duration-150"
      >
        {bookmarked ? (
          <svg
            className="-ml-1 mr-2 h-5 w-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
          </svg>
        ) : (
          <svg
            className="-ml-1 mr-2 h-5 w-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M18 15l-.001 3H21v2h-3.001L18 23h-2l-.001-3H13v-2h2.999L16 15h2zm-7 3v2H3v-2h8zm10-7v2H3v-2h18zm0-7v2H3V4h18z" />
          </svg>
        )}
        {bookmarked ? "Remove from Stack" : "Save to Stack"}
      </button>
      <Link href={url}>
        <a
          rel="nofollow noopener noreferrer"
          target="_blank"
          className="-ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-200 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-black focus:z-10 focus:outline-none active:bg-gray-100 active:text-black transition ease-in-out duration-150"
        >
          Visit
        </a>
      </Link>
    </span>
  );
}
