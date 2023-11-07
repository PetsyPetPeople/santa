/* eslint-disable @typescript-eslint/no-explicit-any */
import { GRAPHQL_API_URL, GRAPHQL_API_URL_SERVER_MODE } from '@/configs';
import { GraphQLClient } from 'graphql-request';

/**
 * Executes an arbitrary GraphQL query against the Reaction API
 *
 * @param {Object} query - The GraphQL query to execute
 * @param {Object} variables - The query's variables
 * @returns {Object} data - the resulting query data
 */

export default async function graphQLRequest<T>(query: string, variables: any) {
  const baseUrl = typeof window === 'undefined' ? GRAPHQL_API_URL_SERVER_MODE : GRAPHQL_API_URL;
  console.log('GRAPHQL_API_URL :>> ', baseUrl);
  try {
    const graphQLClient = new GraphQLClient(baseUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data: T = await graphQLClient.request(query, variables);
    return data;
  } catch (error) {
    console.error(
      '================= ERROR REQUEST GRAPHQL =================\n',
      JSON.stringify(error),
      '\n================= END ERROR REQUEST GRAPHQL =================',
    );
    return null;
  }
}
