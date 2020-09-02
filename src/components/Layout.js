import React from "react";

import Banner from "./Banner";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Banner>
        We're sponsors of{" "}
        <a
          href="https://ti.to/netlify/headless-commerce-summit?source=commercejs"
          className="underline"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Headless Commerce Summit
        </a>
        , Sept 3, 2020 &mdash; Come say hello!
      </Banner>

      <main className="bg-athens-gray pb-3 md:pb-6">{children}</main>

      <Footer />
    </React.Fragment>
  );
}
