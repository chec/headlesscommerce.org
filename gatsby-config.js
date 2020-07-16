require(`dotenv`).config();

const colors = require("./src/utils/colors");

const siteMetadata = {
  title: "Headless Commerce Resources",
  description:
    "A community curated list of commerce products, services, podcasts, books and more. A heads-up for modern store builders.",
  keywords:
    "Headless Commerce, Commerce Resources, Headless eCommerce APIs, Commerce API",
  siteUrl: "https://headlesscommerce.org",
  twitter: "https://twitter.com/commerceheads",
  linkedIn: "https://www.linkedin.com/company/headlesscommerce/",
};

module.exports = {
  siteMetadata,
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: process.env.AIRTABLE_TABLE_NAME,
            tableView: process.env.AIRTABLE_TABLE_VIEW,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_API_KEY,
        queries: [
          {
            query: `
            {
              allAirtable(
                filter: {
                  data: {
                    status: {
                      eq: "Live"
                    }
                  }
                }
              ) {
                nodes {
                  objectID: id
                  data {
                    name
                    tagline
                    url
                    logo {
                      url
                    }
                    technology
                    categories
                    freeTier
                    opensource
                    publishedAt
                    position
                  }
                }
              }
            }`,
            transformer: ({ data: { allAirtable } }) =>
              allAirtable.nodes.map(
                ({
                  objectID,
                  data: {
                    logo,
                    freeTier,
                    opensource,
                    categories,
                    misc,
                    ...record
                  },
                }) => {
                  if (!logo) return;

                  const [firstAttachment] = logo;

                  return {
                    objectID,
                    photo: firstAttachment ? firstAttachment.url : null,
                    categories: [...(categories ? categories : [])],
                    extras: [
                      ...(freeTier ? ["Includes free plan"] : []),
                      ...(opensource ? ["Opensource"] : []),
                    ],
                    ...record,
                  };
                }
              ),
          },
        ],
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        start_url: `/`,
        background_color: colors.primary,
        theme_color: "#FFF",
        display: `standalone`,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
  ],
};
