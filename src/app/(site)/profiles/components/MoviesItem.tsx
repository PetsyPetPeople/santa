'use client';

import { MOVIE_IMAGE_BASE_URL } from '@/configs/env';
import { Movie } from '@/libs/graphql';
import { Card, Rate } from 'antd';
import Link from 'next/link';
import React from 'react';

const { Meta } = Card;

export const MovieItem: React.FC<Movie> = ({ id, title, imageUrl, releaseDate, rating }: Movie) => {
  return (
    <Link href={`/movies/${id}`} className='cursor-pointer'>
      <Card id={id.toString()} hoverable cover={<img alt='example' src={MOVIE_IMAGE_BASE_URL + imageUrl} />}>
        <Rate allowHalf value={rating ? rating / 2 : 0} className='mb-4 mt-2' />
        <Meta title={title} description={releaseDate} />
      </Card>
    </Link>
  );
};
