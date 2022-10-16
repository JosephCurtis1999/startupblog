import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_SCOOP_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                bio
                name
                id
                photo {
                  fileName
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    `;

    const result = await request (graphqlAPI, query);

    return result.postsConnection.edges;
}
