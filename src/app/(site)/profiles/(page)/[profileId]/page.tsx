'use client';

import { Card, EInfoCardType, Heading, InfoCard, Loading, ProfileCard } from '@/components';
import { useMediaQuery } from '@/hooks';
import { Col, Row } from 'antd';
import dynamic from 'next/dynamic';
import { Fragment, Suspense } from 'react';
import { EventCard } from '../../components';

const INFO_MOCK_DATA = [
  { type: EInfoCardType.LEAD_STATUS, title: 'Lead Status', content: 'santa_3', value: 'Acquired', precision: false },
  { type: EInfoCardType.DURATION, title: 'Duration', content: '70 Days', value: 50, precision: true },
  { type: EInfoCardType.TOUCH_POINTS, title: 'Touch Points', content: '7', value: 7, precision: false },
  { type: EInfoCardType.JOURNEY_COST, title: 'Journey Cost', content: 700, value: 569, precision: true },
];

const PieChartCard = dynamic(() => import('../../components/PieChartCard').then((res) => res.PieChartCard), {
  ssr: false,
  loading: () => <Loading className='h-[460px]' />,
});

export default function ProfilePage() {
  const isDesktop = useMediaQuery(1024);

  return (
    <Fragment>
      <ProfileCard />

      <Suspense fallback={<Loading />}>
        <EventCard />
      </Suspense>

      <Row gutter={24}>
        <Col xs={24} lg={12}>
          <Card
            bodyStyle={{ borderRadius: 20, height: '100%', padding: 30, paddingBottom: isDesktop ? 30 : 12 }}
            className='mb-5 rounded-[20px] xl:mb-0'
          >
            <Heading text='Source Attribution' level={3} />

            <PieChartCard />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <InfoCard data={INFO_MOCK_DATA} />
        </Col>
      </Row>
    </Fragment>
  );
}
