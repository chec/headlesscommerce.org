import { graphcmsClient, gql } from "./graphcms";

const GET_PAGE = gql`
  query GetPage($slug: String!) {
    page(where: { slug: $slug }) {
      title
      subTitle
      content {
        markdown
      }
    }
  }
`;

const GET_CATEGORIES = gql`
  {
    categories {
      id
      name
    }
  }
`;

const GET_ALL_SERVICES = gql`
  {
    services {
      id
      name
      tagline
      url
      logo {
        url
      }
      includesFreePlan
      categories {
        id
        name
        slug
      }
    }
  }
`;

const GET_AGENCIES = gql`
  {
    agencies {
      id
      name
      subTitle
      url
      logo {
        url
      }
      locations
    }
  }
`;

const GET_ALL_PAGES = gql`
  {
    pages(
      where: {
        slug_not_in: ["mystack", "index", "suggest", "agencies", "categories"]
      }
    ) {
      slug
    }
  }
`;

export const getPageBySlug = async (slug) =>
  await graphcmsClient.request(GET_PAGE, {
    slug,
  });

export const getCategories = async () =>
  await graphcmsClient.request(GET_CATEGORIES);

export const getAllServices = async () =>
  await graphcmsClient.request(GET_ALL_SERVICES);

export const getAllAgencies = async () =>
  await graphcmsClient.request(GET_AGENCIES);

export const getAllPages = async () =>
  await graphcmsClient.request(GET_ALL_PAGES);
