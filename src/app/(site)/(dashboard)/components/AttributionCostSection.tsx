'use client';

import { BAR_CHART_MOCK_DATA } from '@/__mock';
import { Card, Heading, Loading } from '@/components';
import { EChartColor } from '@/constants';
import { Col, Row } from 'antd';
import dynamic from 'next/dynamic';
import { Fragment } from 'react';

const BarChartCard = dynamic(() => import('@/components/ux/BarChartCard').then((res) => res.BarChartCard), {
  ssr: false,
  suspense: true,
  loading: () => <Loading />,
});

export function AttributionCostSection() {
  return (
    <Fragment>
      <Heading level={3} text='Attribution Cost' rootClassName='mb-7 mt-[60px]' />
      <Row gutter={24}>
        <Col xs={24} lg={8} className='mb-6 lg:mb-0'>
          <Card bodyStyle={{ height: 420 }}>
            <BarChartCard
              heading='Cold Lead'
              subHeading='Total Average Cost:'
              price={110}
              color={EChartColor.BLUE}
              data={BAR_CHART_MOCK_DATA}
            />
          </Card>
        </Col>
        <Col xs={24} lg={8} className='mb-6 lg:mb-0'>
          <Card bodyStyle={{ height: 420 }}>
            <BarChartCard heading='Hot Lead' subHeading='Total Average Cost:' price={150} data={BAR_CHART_MOCK_DATA} />
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card bodyStyle={{ height: 420 }}>
            <BarChartCard
              heading='Acquisition'
              subHeading='Total Average Cost:'
              price={300}
              color={EChartColor.BLACK}
              data={BAR_CHART_MOCK_DATA}
            />
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
