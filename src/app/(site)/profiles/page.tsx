'use client';

import { Card, Statistic } from '@/components';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { Fragment } from 'react';
import { ProfileList } from './components';

export default function ProfilesPage() {
  return (
    <Fragment>
      <Row gutter={16} className='my-12'>
        <Col span={8}>
          <Card>
            <Statistic
              title='Total Leads'
              value={10000}
              precision={16}
              prefix={<ArrowUpOutlined />}
              suffix='%'
              text='this month'
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title='Hard Leads'
              value={5500}
              precision={2}
              prefix={<ArrowUpOutlined />}
              suffix='%'
              text='this month'
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title='Soft Leads'
              value={4500}
              precision={-3}
              prefix={<ArrowDownOutlined />}
              suffix='%'
              text='this month'
            />
          </Card>
        </Col>
      </Row>

      <ProfileList />
    </Fragment>
  );
}
