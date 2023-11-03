'use client';

import { Card, Statistic } from '@/components';
import { Col, Row } from 'antd';
import { Fragment } from 'react';
import { SourceList } from './components';

export default function SourceMapPage() {
  return (
    <Fragment>
      <Row gutter={16} className='mb-5'>
        <Col span={8}>
          <Card>
            <Statistic title='Total Leads' value={10000} precision={16} suffix='%' text='this month' />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title='Hot Leads' value={5500} precision={2} suffix='%' text='this month' />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title='Cold Leads' value={4500} precision={-3} suffix='%' text='this month' />
          </Card>
        </Col>
      </Row>

      <SourceList />
    </Fragment>
  );
}
