import Link from "next/link";

import { useLayoutState } from "../context/layout";
import { useBookmarksState } from "../context/bookmarks";

import ActiveLink from "../components/active-link";
import * as LogoSVG from "../svg/logo.svg";
import * as GridSVG from "../svg/grid.svg";
import * as ListSVG from "../svg/list.svg";
import * as CompassSVG from "../svg/compass.svg";
import * as BuildingSVG from "../svg/building.svg";

const Navigation = () => {
  const { isGrid } = useLayoutState();
  const { hasBookmarks } = useBookmarksState();

  const BrowseSVG = isGrid ? GridSVG : ListSVG;

  return (
    <nav className="max-w-5xl mx-auto">
      <div className="flex flex-wrap items-center -mx-6 text-gray-500">
        <div className="px-6 flex items-center md:flex-1">
          <Link href="/">
            <a>
              <LogoSVG className="h-6 md:h-8 fill-current text-black opacity-75 hover:opacity-100" />
            </a>
          </Link>

          <nav className="flex items-center md:border-l md:border-gray-200 md:pl-6 md:ml-6">
            <ActiveLink href="/" activeClassName="text-black">
              <a className="mr-1.5 px-3 py-1.5 text-sm opacity-75 hover:text-black font-medium flex items-center">
                <BrowseSVG className="w-5 h-5 fill-current mr-1.5" />
                <span>Discover</span>
              </a>
            </ActiveLink>

            <ActiveLink href="/categories" activeClassName="text-black">
              <a className="mr-1.5 px-3 py-1.5 text-sm opacity-75 hover:text-black font-medium flex items-center">
                <CompassSVG className="w-5 h-5 fill-current mr-1.5" />
                <span>Categories</span>
              </a>
            </ActiveLink>

            <ActiveLink href="/agencies" activeClassName="text-black">
              <a className="mr-1.5 px-3 py-1.5 text-sm opacity-75 hover:text-black font-medium flex items-center">
                <BuildingSVG className="w-5 h-5 fill-current mr-1.5" />
                <span>Agencies</span>
              </a>
            </ActiveLink>
          </nav>
        </div>
        <div className="px-6 md:text-right md:flex md:items-center">
          <ActiveLink href="/mystack" activeClassName="text-black">
            <a className="mr-1.5 px-3 py-1.5 text-sm opacity-75 hover:text-black font-medium flex items-center flex-shrink-0">
              <div className="relative">
                {hasBookmarks && (
                  <span className="absolute top-0 right-0 mr-0.5 block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-red-600 to-purple-700"></span>
                )}
                <svg
                  className="w-5 h-5 fill-current mr-1.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z" />
                </svg>
              </div>

              <span>My Stack</span>
            </a>
          </ActiveLink>

          <ActiveLink href="/suggest" activeClassName="text-black">
            <a className="px-3 py-1.5 text-sm rounded bg-gray-100 opacity-75 hover:text-black font-medium inline-flex items-center">
              <svg
                className="w-5 h-5 fill-current mr-1.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M14 3v2H4v13.385L5.763 17H20v-7h2v8a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1h11zm5 0V0h2v3h3v2h-3v3h-2V5h-3V3h3z" />
              </svg>
              <span>Suggest</span>
            </a>
          </ActiveLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
