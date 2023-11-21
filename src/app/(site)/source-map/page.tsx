'use client';

import { Card, Icon, StatisticCard } from '@/components';
import { Col, Row } from 'antd';
import { Fragment } from 'react';
import { SourceList } from './components';

export default function SourceMapPage() {
  return (
    <Fragment>
      <Card className='mb-[54px] rounded-[20px]' bodyStyle={{ borderRadius: 20 }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={8}>
            <StatisticCard
              hasBg
              title='Total Platforms'
              fontSizeValue={2}
              value={4}
              icon={<Icon name='platform' className='h-[28px] w-[28px]' />}
              justify='center'
              avatarSize={68}
              align='center'
            />
          </Col>
          <Col xs={24} lg={8} className='lg:border-l'>
            <StatisticCard
              hasBg
              title='Cost Per Click'
              fontSizeValue={2}
              value='Low: $5'
              icon={<Icon name='mouse' className='h-[28px] w-[16px]' />}
              text='High: $7.50'
              textClassName='text-base'
              justify='center'
              avatarSize={68}
              align='center'
            />
          </Col>
          <Col xs={24} lg={8} className='lg:border-l'>
            <StatisticCard
              hasBg
              title='Cost To Land'
              fontSizeValue={2}
              value='Low: $25'
              icon={<Icon name='user-active' className='h-[30px] w-[22px]' />}
              text='High: $58'
              textClassName='text-base'
              justify='center'
              avatarSize={68}
              align='center'
            />
          </Col>
        </Row>
      </Card>

      <SourceList />
    </Fragment>
  );
}
