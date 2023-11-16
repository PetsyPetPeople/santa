'use client';

import { Card, Heading, InfoCard, Loading, ProfileCard } from '@/components';
import { Col, Row } from 'antd';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
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
  const searchParams = useSearchParams();

  const search = searchParams?.get('status');
  return (
    <Fragment>
      <ProfileCard />

      <Suspense fallback={<Loading />}>
        <EventCard />
      </Suspense>

      <Row gutter={24}>
        <Col span={12}>
          <Card bodyStyle={{ borderRadius: 20, height: '100%', padding: 30 }} className='rounded-[20px]'>
            <Heading text='Source Attribution' level={3} />

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
