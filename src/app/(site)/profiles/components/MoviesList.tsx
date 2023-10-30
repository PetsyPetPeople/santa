'use client';

import React from 'react';
import { Row, Col, Button } from 'antd';
import { MovieItem } from './MoviesItem';
import { isEmpty } from 'lodash';
import { MoviesSkeleton } from './MoviesSkeleton';
import { Movie } from '@/libs/graphql';
import Title from 'antd/es/typography/Title';

interface IProps {
  movies: Movie[];
  loading?: boolean;
  listTitle?: string;
  numShow?: number;
}

export const MoviesList = ({ movies, loading, listTitle, numShow = 4 }: IProps) => {
  return (
    <div className=' bg-white p-6'>
      {listTitle && (
        <Title level={3} className='mb-6'>
          {listTitle}
        </Title>
      )}
      <Row gutter={[24, 24]}>
        {loading ? (
          [...Array(12)].map((_, i) => (
            <Col key={i} span={numShow}>
              <MoviesSkeleton />
            </Col>
          ))
        ) : isEmpty(movies) ? (
          <h4>Data not found</h4>
        ) : (
          movies.map((movie: Movie) => (
            <Col key={movie.id} span={numShow}>
              <MovieItem {...movie} />
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};
