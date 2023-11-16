'use client';

import { ACQUISITION_LEAD_DATA, COLD_LEAD_DATA, HOT_LEAD_DATA } from '@/__mock';
import { Card, Heading, Loading } from '@/components';
import { Col, Row } from 'antd';
import dynamic from 'next/dynamic';
import { Fragment } from 'react';

const PieChartVerticalCard = dynamic(
  () => import('@/components/ux/PieChartVerticalCard').then((res) => res.PieChartVerticalCard),
  {
    ssr: false,
    loading: () => <Loading />,
  },
);

export function FirstClickSourceSection() {
  return (
    <Fragment>
      <Heading text='First Click Source' rootClassName='mb-7 mt-[60px]' />
      <Row gutter={24}>
        <Col xs={24} lg={8} className='mb-6 lg:mb-0'>
          <Card bodyStyle={{ height: '100%', padding: '16px 40px 40px' }}>
            <PieChartVerticalCard id='source1' title='Cold Lead First Click Source' data={COLD_LEAD_DATA} />
          </Card>
        </Col>
        <Col xs={24} lg={8} className='mb-6 lg:mb-0'>
          <Card bodyStyle={{ height: '100%', padding: '16px 40px 40px' }}>
            <PieChartVerticalCard id='source2' title='Hot Lead First Click Source' data={HOT_LEAD_DATA} />
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card bodyStyle={{ height: '100%', padding: '16px 40px 40px' }}>
            <PieChartVerticalCard id='source3' title='Acquisition First Click Source' data={ACQUISITION_LEAD_DATA} />
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
