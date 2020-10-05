import { GraphQLClient } from "graphql-request";
export { gql } from "graphql-request";

export const graphcmsClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string,
  {
    headers: {
      ...((process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN as string) && {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}`,
      }),
    },
  }
);
