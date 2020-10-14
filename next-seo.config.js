const title = "Headless Commerce Resources";
const description =
  "A community curated list of commerce products, services, podcasts, books and more. A heads-up for modern store builders.";

export default {
  titleTemplate: `%s | ${title}`,
  title,
  description,
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://headlesscommerce.org/",
    title,
    description,
    images: [
      {
        url: "https://headlesscommerce.org/headless-commerce.png",
      },
    ],
  },
  twitter: {
    handle: "@commerceheads",
    site: "@commerceheads",
    cardType: "summary_large_image",
  },
};
