'use client';

import { ProfileCard } from '@/components';
import { Col, Row } from 'antd';
import { Fragment } from 'react';
import { EventCard, InfoCard, PieChartCard } from '../../components';

export default function ProfilePage() {
  return (
    <Fragment>
      <ProfileCard />
      <EventCard />

      <Row gutter={24}>
        <Col span={12}>
          <PieChartCard />
        </Col>
        <Col span={12}>
          <InfoCard />
        </Col>
      </Row>
    </Fragment>
  );
}
