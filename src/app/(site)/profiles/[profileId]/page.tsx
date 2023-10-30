'use client';

import { MOVIE_IMAGE_BASE_URL } from '@/configs';
import { useLazyGetMovieDetailQuery } from '@/modules';
import { Col, Rate, Row, Space, Tag } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';

export default function MoviePage() {
  const params = useParams<{ movieId: string }>();

  const [getMovieDetail, { data, isLoading }] = useLazyGetMovieDetailQuery();

  useEffect(() => {
    if (params?.movieId) {
      getMovieDetail({ movieId: Number(params?.movieId) });
    }
  }, [params]);
  console.log(data);

  return (
    <React.Fragment>
      <Row gutter={[24, 24]} className='py-12'>
        <Col span={8}>
          <img
            width={450}
            height={200}
            style={{ margin: 'auto' }}
            alt={data?.title || ''}
            src={MOVIE_IMAGE_BASE_URL + data?.imageUrl}
          />
        </Col>
        <Col span={16}>
          <Title level={3}>{data?.title}</Title>
          <Paragraph>{data?.releaseDate}</Paragraph>
          <Rate allowHalf value={data?.rating ? data.rating / 2 : 0} className='mb-4 mt-2' />
          <Title level={5}>Overview</Title>
          <Paragraph>{data?.description}</Paragraph>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col span={16}>
          <Title level={5}>Genres</Title>
          <Space size={[0, 8]} wrap>
            {data?.movieGenres?.map((item) => <Tag key={item.genreId}>{item.genre.name}</Tag>)}
          </Space>
        </Col>
        <Col span={16}>
          <Title level={5}>Cast</Title>
          <Space size={[0, 8]} wrap>
            {data?.movieActors?.map((item) => <Tag key={item.actorId}>{item.actor.name}</Tag>)}
          </Space>
        </Col>
      </Row>
    </React.Fragment>
  );
}
