import Link from "next/link";

const Category = ({ name, slug, services }) => {
  const noOfServices = services.length;

  return (
    <article className="p-6 bg-white rounded relative shadow group overflow-hidden transition duration-150 ease-in-out">
      <Link href="/categories/[slug]" as={`/categories/${slug}`}>
        <a className="flex items-center justify-between p-2 group transition ease-in-out duration-150">
          <div className="flex-1">
            <h3 className="text-xl leading-7 font-semibold text-gray-900 group-hover:text-purple-600 transition ease-in-out duration-150">
              {name}
            </h3>
            <p className="mt-1 text-gray-400 text-sm leading-6">
              {noOfServices} services
            </p>
          </div>
          <div className="flex-shrink-0">
            <svg
              className="w-8 h-8 text-gray-300 fill-current group-hover:text-gray-700 transition ease-in-out duration-150"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
            </svg>
          </div>
        </a>
      </Link>
    </article>
  );
};

export default Category;
