import React from "react";

import Banner from "./Banner";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Banner>
        We're sponsors of{" "}
        <a
          href="https://headlesscommercesummit2020.sched.com/"
          className="underline"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Headless Commerce Summit
        </a>
        , Sept 3, 2020 &mdash; Come say hello!
      </Banner>
      <Header />

      <main className="bg-athens-gray py-3 md:py-6">{children}</main>

      <Footer />
    </React.Fragment>
  );
}
