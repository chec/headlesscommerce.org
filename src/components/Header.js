import React from "react";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import { useNavigationDispatch } from "../context/NavigationContext";
import Logo from "../svg/hc.svg";
import Twitter from "../svg/twitter.svg";

const Header = () => {
  const { toggleFilters } = useNavigationDispatch();

  return (
    <header className="bg-primary py-6 md:h-32">
      <div className="max-w-5xl px-3 md:px-6 mx-auto h-full md:flex">
        <div className="w-full flex items-center justify-center md:justify-between relative">
          <div className="absolute right-0 flex items-center">
            <OutboundLink
              href="https://twitter.com/commerceheads"
              className="text-white items-center hidden md:inline-flex text-sm"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <Twitter className="fill-current w-4 h-4 mr-3" /> Follow us on
              Twitter
            </OutboundLink>
            <button
              className="md:hidden appearance-none outline-none focus:outline-none"
              onClick={toggleFilters}
            >
              <svg
                className="fill-current text-white w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
              </svg>
            </button>
          </div>

          <Link to="/">
            <Logo className="h-8 md:h-10 fill-current text-white" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
