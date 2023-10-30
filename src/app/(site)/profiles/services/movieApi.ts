import { GET_MOVIES, GET_MOVIE_RECOMMENDATIONS } from '@/graphql';
import { graphqlBaseQuery } from '@/libs/redux/config/graphqlBaseQuery';
import { Movie, QueryMoviesArgs } from '@/libs/graphql';
import { createApi } from '@reduxjs/toolkit/query/react';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: graphqlBaseQuery,
  endpoints: (builder) => ({
    getMovies: builder.query<Movie[], QueryMoviesArgs>({
      query: (variables) => ({
        document: GET_MOVIES,
        variables: {
          ...variables,
        },
      }),
      transformResponse: (response: { movies: Movie[] }) => response.movies,
    }),
    getMovieRecommendations: builder.query<Movie[], QueryMoviesArgs>({
      query: (variables) => ({
        document: GET_MOVIE_RECOMMENDATIONS,
        variables: {
          ...variables,
        },
      }),
      transformResponse: (response: { movieRecommendations: Movie[] }) => response.movieRecommendations,
    }),
  }),
});

export const { useGetMoviesQuery, useLazyGetMoviesQuery, useGetMovieRecommendationsQuery } = movieApi;
