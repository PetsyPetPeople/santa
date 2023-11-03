'use client';

import { Card, Icon, Statistic } from '@/components';
import { Col, Row } from 'antd';
import { Fragment } from 'react';
import { ProfileList } from './components';

export default function ProfilesPage() {
  return (
    <Fragment>
      <Row gutter={16} className='mb-5'>
        <Col span={8}>
          <Card>
            <Statistic
              title='Total Leads'
              value={10000}
              precision={16}
              icon={<Icon name='users' className='h-[48px] w-[48px]' />}
              suffix='%'
              text='this month'
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title='Hot Leads'
              value={5500}
              precision={2}
              icon={<Icon name='user-active' className='h-[48px] w-[48px]' />}
              suffix='%'
              text='this month'
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title='Cold Leads'
              value={4500}
              precision={-3}
              icon={<Icon name='user-question' className='h-[48px] w-[48px]' />}
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
