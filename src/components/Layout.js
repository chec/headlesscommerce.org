import React from "react";

import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <main className="bg-athens-gray pb-3 md:pb-6">{children}</main>

      <Footer />
    </React.Fragment>
  );
}
