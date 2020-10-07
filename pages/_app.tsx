import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

import SEO from "../next-seo.config";
import { LayoutProvider } from "../context/layout";
import { BookmarksProvider } from "../context/bookmarks";

import "../styles/index.css";

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
