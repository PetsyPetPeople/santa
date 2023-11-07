'use client';

import { BAR_CHART_MOCK_DATA } from '@/__mock';
import { Card, Heading, Loading } from '@/components';
import { Col, Row } from 'antd';
import dynamic from 'next/dynamic';
import { Fragment } from 'react';

const BarChartCard = dynamic(() => import('@/components/ux/BarChartCard').then((res) => res.BarChartCard), {
  ssr: false,
  loading: () => <Loading />,
});

export function AttributionCostSection() {
  return (
    <Fragment>
      <Heading text='Attribution Cost' />
      <Row gutter={24}>
        <Col span={8}>
          <Card bodyStyle={{ height: 400 }}>
            <BarChartCard data={BAR_CHART_MOCK_DATA} />
          </Card>
        </Col>
        <Col span={8}>
          <Card bodyStyle={{ height: 400 }}>
            <BarChartCard data={BAR_CHART_MOCK_DATA} />
          </Card>
        </Col>
        <Col span={8}>
          <Card bodyStyle={{ height: 400 }}>
            <BarChartCard data={BAR_CHART_MOCK_DATA} />
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
