'use client';

import { Card, Icon, Statistic } from '@/components';
import { Col, Row } from 'antd';
import { Fragment } from 'react';
import { SourceList } from './components';

export default function SourceMapPage() {
  return (
    <Fragment>
      <Row gutter={16} className='mb-5'>
        <Col span={8}>
          <Card>
            <Statistic
              title='Total Platforms'
              value={4}
              icon={<Icon name='platform' className='h-[48px] w-[48px]' />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title='Cost Per Click'
              value='Low: $5'
              icon={<Icon name='mouse' className='h-[48px] w-[48px]' />}
              text='High: $7.50'
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title='Cost To Land'
              value='Low: $25'
              icon={<Icon name='user-active' className='h-[48px] w-[48px]' />}
              text='High: $58'
            />
          </Card>
        </Col>
      </Row>

      <SourceList />
    </Fragment>
  );
}
