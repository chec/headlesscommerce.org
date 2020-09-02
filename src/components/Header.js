import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import { useNavigationDispatch } from "../context/NavigationContext";
import Logo from "../svg/hc.svg";
import TwitterSVG from "../svg/twitter.svg";
import LinkedInSVG from "../svg/linkedin.svg";

const siteMetadataQuery = graphql`
  {
    site {
      siteMetadata {
        twitter
        linkedIn
      }
    }
  }
`;

const Header = ({ title, description, ctas = [] }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(siteMetadataQuery);
  const { toggleFilters } = useNavigationDispatch();

  return (
    <header className="bg-primary-gradient bg-primary py-6 pb-10 md:pt-12 md:pb-32 lg:pb-40">
      <div className="max-w-5xl px-3 md:px-6 mx-auto">
        <div className="w-full flex items-center justify-center md:justify-between relative">
          <div className="absolute right-0 flex items-center -mr-3">
            <OutboundLink
              href={siteMetadata.linkedIn}
              className="text-white items-center hidden md:inline-flex text-sm p-3"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <LinkedInSVG className="fill-current w-6 h-6" />
            </OutboundLink>
            <OutboundLink
              href={siteMetadata.twitter}
              className="text-white items-center hidden md:inline-flex text-sm p-3"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <TwitterSVG className="fill-current w-6 h-6" />
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
            <Logo className="h-8 fill-current text-white" />
          </Link>
        </div>
      </div>

      <div className="pt-6 mx-auto max-w-screen-xl px-4 sm:px-6 md:pt-32">
        <div className="text-center">
          {title && (
            <h2 className="text-2xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-3 max-w-md mx-auto text-base text-white opacity-75 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {description}
            </p>
          )}

          {ctas && (
            <div className="mt-4">
              {ctas.map((cta, index) => (
                <div class="rounded-md shadow inline-flex" key={index}>
                  <Link
                    {...cta}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-secondary bg-white focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
