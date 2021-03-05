import Link, { LinkProps } from "next/link";
import Markdown from "react-markdown";

import Navigation from "./navigation";

import * as CommerceJsSVG from "../svg/commercejs.svg";

type LayoutProps = {
  children?: any;
  title: string;
  subTitle?: string;
  description?: string;
  cta?: LinkProps;
};

const Layout = ({
  children,
  title,
  subTitle,
  description,
  cta,
}: LayoutProps) => {
  return (
    <>
      <header className="pt-6 md:pt-8">
        <Navigation />

        <div className="p-6 py-12 md:py-32 lg:py-36 bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-2xl mx-auto text-center">
            {title && (
              <h2 className="text-2xl sm:text-5xl md:text-6xl tracking-tight font-extrabold leading-tight text-transparent bg-gradient-to-tl from-red-600 to-purple-600 bg-clip-text">
                {title}
              </h2>
            )}
            {subTitle && (
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 opacity-75 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                {subTitle}
              </p>
            )}
            {description && (
              <div className="prose md:prose-lg mx-auto pt-6 md:pt-12">
                <Markdown children={description} />
              </div>
            )}
            {cta && <div className="pt-6 md:pt-10">{cta}</div>}
          </div>
        </div>
      </header>
      <main className="bg-gray-50 border-b border-gray-200 px-6">
        {children}
      </main>
      <footer className="bg-white py-6 md:py-12">
        <div className="max-w-5xl px-6 mx-auto text-center">
          <p className="text-gray-400 text-sm inline-flex items-center mb-2">
            <span className="mr-2">Maintained by</span>
            <Link href="https://commercejs.com">
              <a
                className="text-gray-400 hover:text-black"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <CommerceJsSVG className="h-5 inline-block" />
              </a>
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
