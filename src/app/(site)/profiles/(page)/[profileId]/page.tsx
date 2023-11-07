'use client';

import { Button, Card, InfoCard, Loading, ProfileCard } from '@/components';
import { Col, Flex, Row } from 'antd';
import dynamic from 'next/dynamic';
import { Fragment, Suspense } from 'react';
import { EventCard } from '../../components';

const INFO_MOCK_DATA = [
  { content: 'Lead Status', title: 'Hot' },
  { content: 'Touch Points', title: '6' },
  { content: 'Journey Cost', title: '$600' },
];

const PieChartCard = dynamic(() => import('../../components/PieChartCard').then((res) => res.PieChartCard), {
  ssr: false,
  loading: () => <Loading className='h-[460px]' />,
});

export default function ProfilePage() {
  return (
    <Fragment>
      <Flex align='center' justify='space-between'>
        <ProfileCard />

        <Button buttonType='button' href='/'>
          User Journey
        </Button>
      </Flex>

      <Suspense fallback={<Loading />}>
        <EventCard />
      </Suspense>

      <Row gutter={24}>
        <Col span={12}>
          <Card bodyStyle={{ height: '100%', padding: 0 }} className='h-[250px]'>
            <PieChartCard />
          </Card>
        </Col>
        <Col span={12}>
          <InfoCard data={INFO_MOCK_DATA} />
        </Col>
      </Row>
    </Fragment>
  );
}
