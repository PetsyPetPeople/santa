import { InputMaybe, MovieWhereInput, QueryMoviesArgs } from '@/libs/graphql';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLazyGetMoviesQuery } from '..';

type Search = {
  orderBy?: string;
  filter?: {
    release?: { from: string; to: string };
    keyword?: string;
  };
};

export const useSearchMovie = () => {
  const searchParams = useSearchParams();

  const [search, setSearch] = useState<Search>();

  const [filter, setFilter] = useState<QueryMoviesArgs>({ take: 12, skip: 0 });

  const [getMovies, { data, isLoading }] = useLazyGetMoviesQuery();

  useEffect(() => {
    const initSearch: Search = {
      filter: {},
    };

    const sort = searchParams.get('sort');
    if (sort) {
      initSearch.orderBy = sort;
    }

    const keyword = searchParams.get('f.key');
    if (keyword) {
      initSearch.filter = {
        ...initSearch.filter,
        keyword,
      };
    }

    const releaseDate = searchParams.get('f.release');
    if (releaseDate) {
      const [from, to] = releaseDate.split('.');

      initSearch.filter = {
        ...initSearch.filter,
        release: {
          from,
          to,
        },
      };
    }

    setSearch(initSearch);

    const filterParams: QueryMoviesArgs = {
      take: 12,
      skip: 0,
    };

    if (initSearch.orderBy) {
      const [key, val] = initSearch.orderBy.split('.');
      filterParams.orderBy = [
        {
          [key]: val,
        },
      ];
    }

    if (!initSearch.filter) {
      setFilter(filterParams);
      return;
    }

    const where: InputMaybe<MovieWhereInput> = {};

    const sFilter = initSearch.filter;

    if (sFilter.keyword) {
      where.title = {
        contains: sFilter.keyword,
      };
    }

    if (sFilter.release) {
      where.releaseDate = {
        gte: sFilter.release.from,
        lte: sFilter.release.to,
      };
    }
    filterParams.where = where;

    setFilter(filterParams);
  }, [searchParams]);

  useEffect(() => {
    getMovies(filter);
  }, [filter]);

  return {
    filter,
    search,
    setSearch,
    setFilter,
    data: data || [],
    isLoading,
  };
};
