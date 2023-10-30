import { ELoading } from '@/constants';
import { Movie } from '@/libs/graphql';

export interface IMovieState {
  entities: Movie[];
  loading: ELoading;
  currentRequestId: string | undefined;
  error: string | null;
}
