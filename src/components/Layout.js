import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />

      <main className="bg-athens-gray py-3 md:py-6">{children}</main>

      <Footer />
    </React.Fragment>
  );
}
