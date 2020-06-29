import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import Logo from "../svg/chec.svg";

const Footer = () => (
  <footer className="bg-white border-t py-6 md:py-12">
    <div className="max-w-5xl px-6 mx-auto text-center">
      <p className="text-pale-sky text-sm inline-flex items-center mb-2">
        <span className="mr-2">Maintained by</span>
        <OutboundLink
          href="https://commercejs.com"
          target="_blank"
          className="text-primary hover:text-secondary"
        >
          <Logo className="h-5   inline-block" />
        </OutboundLink>
      </p>
      <p className="text-pale-sky text-sm">
        Powered by{" "}
        <OutboundLink
          href="https://algolia.com"
          target="_blank"
          className="text-primary hover:text-secondary"
        >
          Algolia
        </OutboundLink>{" "}
        and opensource on{" "}
        <OutboundLink
          href="https://github.com/chec/headlesscommerce.org"
          target="_blank"
          className="text-primary hover:text-secondary"
        >
          GitHub
        </OutboundLink>
        .
      </p>
    </div>
  </footer>
);

export default Footer;
