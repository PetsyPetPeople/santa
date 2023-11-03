/* eslint-disable @typescript-eslint/no-explicit-any */
import { GRAPHQL_API_URL } from '@/configs/env';
import { retry } from '@reduxjs/toolkit/query';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { getSession } from 'next-auth/react';

// Create our baseQuery instance
export const graphqlBaseQuery = graphqlRequestBaseQuery({
  url: GRAPHQL_API_URL,
  prepareHeaders: async (headers) => {
    const session = await getSession();

    if (session?.backendTokens) {
      headers.set('Authorization', `Bearer ${session.backendTokens.accessToken}`);
    }

    return headers;
  },
});

export const graphqlBaseQueryWithRetry = retry(graphqlBaseQuery, {
  maxRetries: 6,
});
