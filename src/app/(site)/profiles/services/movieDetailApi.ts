import { GET_MOVIE_BY_ID } from '@/graphql';
import { graphqlBaseQuery } from '@/libs/redux/config/graphqlBaseQuery';
import { Movie } from '@/libs/graphql';
import { createApi } from '@reduxjs/toolkit/query/react';

// initialize an itineraries api service that we'll inject endpoints into later as needed
export const movieDetailApi = createApi({
  reducerPath: 'movieDetailApi',
  baseQuery: graphqlBaseQuery,
  endpoints: (builder) => ({
    getMovieDetail: builder.query<Movie, { movieId: number }>({
      query: (variables) => ({
        document: GET_MOVIE_BY_ID,
        variables: {
          movieId: variables.movieId,
        },
      }),
      transformResponse: (response: { movie: Movie }) => response.movie,
    }),
  }),
});

export const { useGetMovieDetailQuery, useLazyGetMovieDetailQuery } = movieDetailApi;
