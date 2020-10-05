import { Fragment } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import { LayoutProvider } from "../context/layout";
import { BookmarksProvider } from "../context/bookmarks";

import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <LayoutProvider>
        <BookmarksProvider>
          <Component {...pageProps} />
        </BookmarksProvider>
      </LayoutProvider>
    </Fragment>
  );
}

export default MyApp;
