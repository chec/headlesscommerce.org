import React from "react";

import Layout from "./src/components/Layout";
import { NavigationProvider } from "./src/context/NavigationContext";
import { LayoutProvider } from "./src/context/LayoutContext";
import { BookmarksProvider } from "./src/context/BookmarksContext";

import "./src/styles/main.css";

export const wrapPageElement = ({ element, props }) => {
  return (
    <NavigationProvider>
      <LayoutProvider>
        <Layout {...props}>
          <BookmarksProvider>{element}</BookmarksProvider>
        </Layout>
      </LayoutProvider>
    </NavigationProvider>
  );
};
