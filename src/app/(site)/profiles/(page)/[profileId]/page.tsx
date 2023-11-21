'use client';

import { Card, EInfoCardType, Heading, InfoCard, Loading, ProfileCard } from '@/components';
import { useMediaQuery } from '@/hooks';
import { Col, Row } from 'antd';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import { Fragment, Suspense, useMemo } from 'react';
import { EventCard } from '../../components';
import { EventItem } from '../../types';

const COMPLETED_DATA: EventItem[] = [
  { id: 'icon-instagram', count: 1, value: 100, status: 'hot' },
  { id: 'icon-google', count: 2, value: 200, status: 'hot' },
  { id: 'icon-tiktok', count: 2, value: 200, status: 'hot' },
  { id: 'icon-facebook', count: 2, value: 200, status: 'hot' },
  { id: 'icon-canstar', count: 2, value: 200, status: 'hot' },
  { id: 'icon-youtube', count: 2, value: 200, status: 'hot' },
  { id: 'icon-credit-savvy', count: 2, value: 200, status: 'hot' },
  { id: 'icon-linkedIn', count: 2, value: 200, status: 'cold' },
  { id: 'icon-market', count: 2, value: 200, status: 'cold' },
  { id: 'icon-mozo', count: 2, value: 200, status: 'cold' },
  { id: 'icon-pet', count: 2, value: 200, status: 'cold' },
  { id: 'icon-pinterest', count: 2, value: 200, status: 'cold' },
  { id: 'icon-product-review', count: 2, value: 200, status: 'cold' },
  { id: 'icon-savvy', count: 2, value: 200, status: 'cold' },
];

const COLD_DATA: EventItem[] = [
  { id: 'icon-savvy', count: 2, value: 200, status: 'cold' },
  { id: 'icon-credit-savvy', count: 2, value: 200, status: 'cold' },
  { id: 'icon-tiktok', count: 2, value: 200, status: 'cold' },
  { id: 'icon-google', count: 2, value: 200, status: 'cold' },
  { id: '', count: null, value: null, status: null },
];

const HOT_DATA: EventItem[] = [
  { id: 'icon-savvy', count: 1, value: 200, status: 'cold' },
  { id: 'icon-credit-savvy', count: 2, value: 200, status: 'cold' },
  { id: 'icon-tiktok', count: 3, value: 200, status: 'cold' },
  { id: 'icon-google', count: 4, value: 200, status: 'cold' },
  { id: 'icon-savvy', count: 5, value: 200, status: 'hot' },
  { id: 'icon-market', count: 6, value: 200, status: 'hot' },
  { id: '', count: null, value: null, status: null },
];

const HOT_PIE_DATA = [
  { name: 'Savvy', value: 20, color: '#EE4D52' },
  { name: 'CanCompare The Market', value: 15, color: '#F17175' },
  { name: 'Credit Savvy', value: 10, color: '#F59497' },
  { name: 'Tik Tok', value: 9, color: '#F8B8BA' },
  { name: 'Google', value: 8, color: '#FCDBDC' },
  { name: 'Mozo', value: 7, color: '#FDEDEE' },
];

const COLD_PIE_DATA = [
  { name: 'Savvy', value: 20, color: '#6AB3F6' },
  { name: 'CanCompare The Market', value: 15, color: '#88C2F8' },
  { name: 'Credit Savvy', value: 10, color: '#A6D1FA' },
  { name: 'Tik Tok', value: 9, color: '#C3E1FC' },
  { name: 'Google', value: 8, color: '#E1F0FD' },
  { name: 'Mozo', value: 7, color: '#F0F7FE' },
];

const INFO_MOCK_DATA = [
  { type: EInfoCardType.LEAD_STATUS, title: 'Lead Status', content: 'santa_3', value: 'Acquired', precision: false },
  { type: EInfoCardType.DURATION, title: 'Duration', content: '70 Days', value: 50, precision: true },
  { type: EInfoCardType.TOUCH_POINTS, title: 'Touch Points', content: '7', value: 7, precision: false },
  { type: EInfoCardType.JOURNEY_COST, title: 'Journey Cost', content: 700, value: 569, precision: true },
  { type: EInfoCardType.ROAS, title: 'Roas', content: 100, value: 90, precision: true },
];

const PieChartCard = dynamic(() => import('../../components/PieChartCard').then((res) => res.PieChartCard), {
  ssr: false,
  suspense: true,
  loading: () => <Loading className='h-[460px]' />,
});

export default function ProfilePage() {
  const isDesktop = useMediaQuery(1024);
  const params = useSearchParams();
  const status = params?.get('status')?.toLowerCase();

  const eventData = useMemo(() => {
    return status === 'hot' ? HOT_DATA : status === 'cold' ? COLD_DATA : COMPLETED_DATA;
  }, [status]);

  const pieData = useMemo(() => {
    return status === 'cold' ? COLD_PIE_DATA : HOT_PIE_DATA;
  }, [status]);

  return (
    <Fragment>
      <ProfileCard />

      <Suspense fallback={<Loading />}>
        <EventCard data={eventData} />
      </Suspense>

      <Row gutter={24}>
        <Col xs={24} lg={11}>
          <Card
            bodyStyle={{ borderRadius: 20, height: '100%', padding: 30, paddingBottom: isDesktop ? 30 : 12 }}
            className='mb-5 rounded-[20px] xl:mb-0'
          >
            <Heading text='Source Attribution' level={3} />

            <PieChartCard data={pieData} dotSize='small' />
          </Card>
        </Col>
        <Col xs={24} lg={13}>
          <InfoCard data={INFO_MOCK_DATA} />
        </Col>
      </Row>
    </Fragment>
  );
}
