import { gql } from 'graphql-request';

export const GET_MOVIES = gql`
  query GetMovies(
    $where: MovieWhereInput
    $orderBy: [MovieOrderByWithRelationInput!]
    $cursor: MovieWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [MovieScalarFieldEnum!]
  ) {
    movies(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take, distinct: $distinct) {
      id
      title
      description
      imageUrl
      rating
      releaseDate
    }
  }
`;

export const GET_MOVIE_BY_ID = gql`
  query getMovie($movieId: Int!) {
    movie(id: $movieId) {
      createdAt
      description
      id
      imageUrl
      rating
      releaseDate
      title
      movieActors {
        actor {
          id
          name
          imageUrl
        }
      }

      movieGenres {
        genre {
          name
          id
        }
      }
    }
  }
`;

export const GET_MOVIE_RECOMMENDATIONS = gql`
  query GetMovieRecommendations(
    $where: MovieWhereInput
    $orderBy: [MovieOrderByWithRelationInput!]
    $cursor: MovieWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [MovieScalarFieldEnum!]
  ) {
    movieRecommendations(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      skip: $skip
      take: $take
      distinct: $distinct
    ) {
      id
      title
      description
      movieActors {
        actor {
          name
        }
      }
      movieGenres {
        genre {
          name
        }
      }
      imageUrl
      rating
      releaseDate
    }
  }
`;
