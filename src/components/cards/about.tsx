import Link from "next/link";

import * as CommerceJsSVG from "../../svg/commercejs.svg";

const AboutCard = () => {
  return (
    <article className="p-8 bg-white rounded border-2 border-purple-800 relative shadow group overflow-hidden flex items-center">
      <div className="relative z-20 text-center">
        <h3 className="text-xl md:text-2xl tracking-tight leading-tight font-extrabold text-transparent bg-gradient-to-r from-red-600 via-indigo-600 to-purple-700 bg-clip-text">
          Learn more about why we built this site
        </h3>

        <div className="pt-6">
          <Link href="/about">
            <a className="relative inline-flex items-center text-center px-3 py-2 rounded-md border border-gray-200 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-black focus:z-10 focus:outline-none active:bg-gray-100 active:text-black transition ease-in-out duration-150">
              Find out what's next
            </a>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 w-full pb-6 text-center">
        <Link href="/about">
          <a rel="nofollow noopener noreferrer" target="_blank">
            <CommerceJsSVG className="h-4 inline-block" />
          </a>
        </Link>
      </div>
    </article>
  );
};

export default AboutCard;
