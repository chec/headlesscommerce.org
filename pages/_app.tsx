import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import Router from "next/router";

import SEO from "../next-seo.config";
import { LayoutProvider } from "../context/layout";
import { BookmarksProvider } from "../context/bookmarks";
import * as gtag from "../lib/ga";

import "../styles/index.css";

Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />

      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <LayoutProvider>
        <BookmarksProvider>
          <Component {...pageProps} />
        </BookmarksProvider>
      </LayoutProvider>
    </>
  );
}

export default MyApp;
