export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTimeISO: { input: any; output: any };
};

export type Actor = {
  __typename?: 'Actor';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['Int']['output'];
  imageUrl: Scalars['String']['output'];
  midbId: Scalars['Float']['output'];
  movieActors?: Maybe<Array<MovieActor>>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type ActorRelationFilter = {
  is?: InputMaybe<ActorWhereInput>;
  isNot?: InputMaybe<ActorWhereInput>;
};

export type ActorWhereInput = {
  AND?: InputMaybe<Array<ActorWhereInput>>;
  MovieActors?: InputMaybe<MovieActorsListRelationFilter>;
  NOT?: InputMaybe<Array<ActorWhereInput>>;
  OR?: InputMaybe<Array<ActorWhereInput>>;
  UserActorFavorites?: InputMaybe<UserActorFavoritesListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  imageUrl?: InputMaybe<StringFilter>;
  midbId?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type EnumUserGenderFilter = {
  equals?: InputMaybe<UserGender>;
  in?: InputMaybe<Array<UserGender>>;
  not?: InputMaybe<NestedEnumUserGenderFilter>;
  notIn?: InputMaybe<Array<UserGender>>;
};

export type EnumUserRoleFilter = {
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<UserRole>>;
  not?: InputMaybe<NestedEnumUserRoleFilter>;
  notIn?: InputMaybe<Array<UserRole>>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type Genre = {
  __typename?: 'Genre';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['Int']['output'];
  movieGenres?: Maybe<Array<MovieGenre>>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type GenreRelationFilter = {
  is?: InputMaybe<GenreWhereInput>;
  isNot?: InputMaybe<GenreWhereInput>;
};

export type GenreWhereInput = {
  AND?: InputMaybe<Array<GenreWhereInput>>;
  MovieGenres?: InputMaybe<MovieGenresListRelationFilter>;
  NOT?: InputMaybe<Array<GenreWhereInput>>;
  OR?: InputMaybe<Array<GenreWhereInput>>;
  UserGenreFavorites?: InputMaybe<UserGenreFavoritesListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Movie = {
  __typename?: 'Movie';
  createdAt: Scalars['DateTimeISO']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  imageUrl: Scalars['String']['output'];
  movieActors?: Maybe<Array<MovieActor>>;
  movieGenres?: Maybe<Array<MovieGenre>>;
  rating: Scalars['Float']['output'];
  releaseDate: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MovieActor = {
  __typename?: 'MovieActor';
  actor: Actor;
  actorId: Scalars['Float']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  movie: Movie;
  movieId: Scalars['Float']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MovieActorsListRelationFilter = {
  every?: InputMaybe<MovieActorsWhereInput>;
  none?: InputMaybe<MovieActorsWhereInput>;
  some?: InputMaybe<MovieActorsWhereInput>;
};

export type MovieActorsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieActorsWhereInput = {
  AND?: InputMaybe<Array<MovieActorsWhereInput>>;
  NOT?: InputMaybe<Array<MovieActorsWhereInput>>;
  OR?: InputMaybe<Array<MovieActorsWhereInput>>;
  actor?: InputMaybe<ActorRelationFilter>;
  actorId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieGenre = {
  __typename?: 'MovieGenre';
  createdAt: Scalars['DateTimeISO']['output'];
  genre: Genre;
  genreId: Scalars['Float']['output'];
  movie: Movie;
  movieId: Scalars['Float']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MovieGenresListRelationFilter = {
  every?: InputMaybe<MovieGenresWhereInput>;
  none?: InputMaybe<MovieGenresWhereInput>;
  some?: InputMaybe<MovieGenresWhereInput>;
};

export type MovieGenresOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieGenresWhereInput = {
  AND?: InputMaybe<Array<MovieGenresWhereInput>>;
  NOT?: InputMaybe<Array<MovieGenresWhereInput>>;
  OR?: InputMaybe<Array<MovieGenresWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  genre?: InputMaybe<GenreRelationFilter>;
  genreId?: InputMaybe<IntFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieOrderByWithRelationInput = {
  MovieActors?: InputMaybe<MovieActorsOrderByRelationAggregateInput>;
  MovieGenres?: InputMaybe<MovieGenresOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageUrl?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  ratings?: InputMaybe<RatingOrderByRelationAggregateInput>;
  releaseDate?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieRelationFilter = {
  is?: InputMaybe<MovieWhereInput>;
  isNot?: InputMaybe<MovieWhereInput>;
};

export enum MovieScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  ImageUrl = 'imageUrl',
  Rating = 'rating',
  ReleaseDate = 'releaseDate',
  Title = 'title',
  UpdatedAt = 'updatedAt',
}

export type MovieWhereInput = {
  AND?: InputMaybe<Array<MovieWhereInput>>;
  MovieActors?: InputMaybe<MovieActorsListRelationFilter>;
  MovieGenres?: InputMaybe<MovieGenresListRelationFilter>;
  NOT?: InputMaybe<Array<MovieWhereInput>>;
  OR?: InputMaybe<Array<MovieWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  imageUrl?: InputMaybe<StringFilter>;
  rating?: InputMaybe<FloatFilter>;
  ratings?: InputMaybe<RatingListRelationFilter>;
  releaseDate?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieWhereInput>>;
  MovieActors?: InputMaybe<MovieActorsListRelationFilter>;
  MovieGenres?: InputMaybe<MovieGenresListRelationFilter>;
  NOT?: InputMaybe<Array<MovieWhereInput>>;
  OR?: InputMaybe<Array<MovieWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  imageUrl?: InputMaybe<StringFilter>;
  rating?: InputMaybe<FloatFilter>;
  ratings?: InputMaybe<RatingListRelationFilter>;
  releaseDate?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  favoriteActor: UserActorFavorites;
  favoriteGenre: UserGenreFavorites;
  loginUser: UserLoginResponse;
  refreshTokens: UserLoginResponse;
  signupUser: UserCreateResponse;
};

export type MutationFavoriteActorArgs = {
  actorId: Scalars['Float']['input'];
};

export type MutationFavoriteGenreArgs = {
  genreId: Scalars['Float']['input'];
};

export type MutationLoginUserArgs = {
  data: UserLoginInput;
};

export type MutationRefreshTokensArgs = {
  refreshToken: Scalars['String']['input'];
};

export type MutationSignupUserArgs = {
  data: UserCreateInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedEnumUserGenderFilter = {
  equals?: InputMaybe<UserGender>;
  in?: InputMaybe<Array<UserGender>>;
  not?: InputMaybe<NestedEnumUserGenderFilter>;
  notIn?: InputMaybe<Array<UserGender>>;
};

export type NestedEnumUserRoleFilter = {
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<UserRole>>;
  not?: InputMaybe<NestedEnumUserRoleFilter>;
  notIn?: InputMaybe<Array<UserRole>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  actor?: Maybe<Actor>;
  actors: Array<Actor>;
  genre?: Maybe<Genre>;
  genres: Array<Genre>;
  movie?: Maybe<Movie>;
  movieActors: Array<MovieGenre>;
  movieRecommendations: Array<Movie>;
  movies: Array<Movie>;
  ratings: Array<Rating>;
  user?: Maybe<User>;
  userActorFavorites: Array<UserActorFavorites>;
  userGenreFavorites: Array<UserGenreFavorites>;
  users: Array<User>;
};

export type QueryActorArgs = {
  id: Scalars['ID']['input'];
};

export type QueryGenreArgs = {
  id: Scalars['ID']['input'];
};

export type QueryMovieArgs = {
  id: Scalars['Int']['input'];
};

export type QueryMovieRecommendationsArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWhereInput>;
};

export type QueryMoviesArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWhereInput>;
};

export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type Rating = {
  __typename?: 'Rating';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['Int']['output'];
  movie: Movie;
  movieId: Scalars['Float']['output'];
  rating: Scalars['Float']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  userId: Scalars['Float']['output'];
};

export type RatingListRelationFilter = {
  every?: InputMaybe<RatingWhereInput>;
  none?: InputMaybe<RatingWhereInput>;
  some?: InputMaybe<RatingWhereInput>;
};

export type RatingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RatingWhereInput = {
  AND?: InputMaybe<Array<RatingWhereInput>>;
  NOT?: InputMaybe<Array<RatingWhereInput>>;
  OR?: InputMaybe<Array<RatingWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<IntFilter>;
  rating?: InputMaybe<FloatFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  age: Scalars['Float']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  gender: UserGenders;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  ratings: Array<Rating>;
  role: UserRoles;
  updatedAt: Scalars['DateTimeISO']['output'];
  userActorFavorites?: Maybe<Array<UserActorFavorites>>;
  userGenreFavorites?: Maybe<Array<UserGenreFavorites>>;
};

export type UserActorFavorites = {
  __typename?: 'UserActorFavorites';
  actor: Genre;
  actorId: Scalars['Float']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  userId: Scalars['Float']['output'];
};

export type UserActorFavoritesListRelationFilter = {
  every?: InputMaybe<UserActorFavoritesWhereInput>;
  none?: InputMaybe<UserActorFavoritesWhereInput>;
  some?: InputMaybe<UserActorFavoritesWhereInput>;
};

export type UserActorFavoritesWhereInput = {
  AND?: InputMaybe<Array<UserActorFavoritesWhereInput>>;
  NOT?: InputMaybe<Array<UserActorFavoritesWhereInput>>;
  OR?: InputMaybe<Array<UserActorFavoritesWhereInput>>;
  actor?: InputMaybe<ActorRelationFilter>;
  actorId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UserCreateInput = {
  age?: InputMaybe<Scalars['Float']['input']>;
  email: Scalars['String']['input'];
  gender?: InputMaybe<UserGenders>;
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type UserCreateResponse = {
  __typename?: 'UserCreateResponse';
  accessToken: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  refreshToken: Scalars['String']['output'];
};

export enum UserGender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER',
}

export enum UserGenders {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER',
}

export type UserGenreFavorites = {
  __typename?: 'UserGenreFavorites';
  createdAt: Scalars['DateTimeISO']['output'];
  genre: Genre;
  genreId: Scalars['Float']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  userId: Scalars['Float']['output'];
};

export type UserGenreFavoritesListRelationFilter = {
  every?: InputMaybe<UserGenreFavoritesWhereInput>;
  none?: InputMaybe<UserGenreFavoritesWhereInput>;
  some?: InputMaybe<UserGenreFavoritesWhereInput>;
};

export type UserGenreFavoritesWhereInput = {
  AND?: InputMaybe<Array<UserGenreFavoritesWhereInput>>;
  NOT?: InputMaybe<Array<UserGenreFavoritesWhereInput>>;
  OR?: InputMaybe<Array<UserGenreFavoritesWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  genre?: InputMaybe<GenreRelationFilter>;
  genreId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UserLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserLoginResponse = {
  __typename?: 'UserLoginResponse';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER',
}

export enum UserRoles {
  Admin = 'ADMIN',
  User = 'USER',
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  UserActorFavorites?: InputMaybe<UserActorFavoritesListRelationFilter>;
  UserGenreFavorites?: InputMaybe<UserGenreFavoritesListRelationFilter>;
  age?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  gender?: InputMaybe<EnumUserGenderFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  ratings?: InputMaybe<RatingListRelationFilter>;
  role?: InputMaybe<EnumUserRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserLoginMutationVariables = Exact<{
  data: UserLoginInput;
}>;

export type UserLoginMutation = {
  __typename?: 'Mutation';
  loginUser: { __typename?: 'UserLoginResponse'; accessToken: string; refreshToken: string };
};

export type RefreshTokenMutationVariables = Exact<{
  refreshToken: Scalars['String']['input'];
}>;

export type RefreshTokenMutation = {
  __typename?: 'Mutation';
  refreshTokens: { __typename?: 'UserLoginResponse'; accessToken: string; refreshToken: string };
};

export type GetMoviesQueryVariables = Exact<{
  where?: InputMaybe<MovieWhereInput>;
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationInput> | MovieOrderByWithRelationInput>;
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  distinct?: InputMaybe<Array<MovieScalarFieldEnum> | MovieScalarFieldEnum>;
}>;

export type GetMoviesQuery = {
  __typename?: 'Query';
  movies: Array<{
    __typename?: 'Movie';
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    rating: number;
    releaseDate: string;
  }>;
};

export type GetMovieQueryVariables = Exact<{
  movieId: Scalars['Int']['input'];
}>;

export type GetMovieQuery = {
  __typename?: 'Query';
  movie?: {
    __typename?: 'Movie';
    createdAt: any;
    description: string;
    id: number;
    imageUrl: string;
    rating: number;
    releaseDate: string;
    title: string;
    movieActors?: Array<{
      __typename?: 'MovieActor';
      actor: { __typename?: 'Actor'; id: number; name: string; imageUrl: string };
    }> | null;
    movieGenres?: Array<{
      __typename?: 'MovieGenre';
      genre: { __typename?: 'Genre'; name: string; id: number };
    }> | null;
  } | null;
};

export type GetMovieRecommendationsQueryVariables = Exact<{
  where?: InputMaybe<MovieWhereInput>;
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationInput> | MovieOrderByWithRelationInput>;
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  distinct?: InputMaybe<Array<MovieScalarFieldEnum> | MovieScalarFieldEnum>;
}>;

export type GetMovieRecommendationsQuery = {
  __typename?: 'Query';
  movieRecommendations: Array<{
    __typename?: 'Movie';
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    rating: number;
    releaseDate: string;
    movieActors?: Array<{ __typename?: 'MovieActor'; actor: { __typename?: 'Actor'; name: string } }> | null;
    movieGenres?: Array<{ __typename?: 'MovieGenre'; genre: { __typename?: 'Genre'; name: string } }> | null;
  }>;
};
