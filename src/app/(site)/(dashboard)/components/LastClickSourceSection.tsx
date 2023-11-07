'use client';

import { PIE_CHART_MOCK_DATA } from '@/__mock';
import { Card, Heading, Loading } from '@/components';
import { Col, Row } from 'antd';
import { flatMap } from 'lodash';
import dynamic from 'next/dynamic';
import { Fragment } from 'react';

const PieChartVerticalCard = dynamic(
  () => import('@/components/ux/PieChartVerticalCard').then((res) => res.PieChartVerticalCard),
  {
    ssr: false,
    loading: () => <Loading />,
  },
);

export function LastClickSourceSection() {
  const data = flatMap(Object.values(PIE_CHART_MOCK_DATA));

  return (
    <Fragment>
      <Heading text='Last Click Source' />
      <Row gutter={24}>
        <Col span={8}>
          <Card bodyStyle={{ height: '100%', padding: '16px 40px 40px' }} className='h-[460px]'>
            <PieChartVerticalCard
              id='source4'
              title='Soft Lead Last Click Source'
              data={data}
              dataColors={PIE_CHART_MOCK_DATA}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card bodyStyle={{ height: '100%', padding: '16px 40px 40px' }} className='h-[460px]'>
            <PieChartVerticalCard
              id='source5'
              title='Soft Lead Last Click Source'
              data={data}
              dataColors={PIE_CHART_MOCK_DATA}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card bodyStyle={{ height: '100%', padding: '16px 40px 40px' }} className='h-[460px]'>
            <PieChartVerticalCard
              id='source6'
              title='Soft Lead Last Click Source'
              data={data}
              dataColors={PIE_CHART_MOCK_DATA}
            />
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
