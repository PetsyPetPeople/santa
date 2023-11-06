'use client';

import { Button, InfoCard, ProfileCard } from '@/components';
import { Col, Flex, Row } from 'antd';
import { Fragment } from 'react';
import { EventCard, PieChartCard } from '../../components';

const INFO_MOCK_DATA = [
  { content: 'Lead Status', title: 'Hot' },
  { content: 'Touch Points', title: '6' },
  { content: 'Journey Cost', title: '$600' },
];

export default function ProfilePage() {
  return (
    <Fragment>
      <Flex align='center' justify='space-between'>
        <ProfileCard />

        <Button buttonType='button' href='/'>
          User Journey
        </Button>
      </Flex>

      <EventCard />

      <Row gutter={24}>
        <Col span={12}>
          <PieChartCard />
        </Col>
        <Col span={12}>
          <InfoCard data={INFO_MOCK_DATA} />
        </Col>
      </Row>
    </Fragment>
  );
}
