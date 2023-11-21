'use client';

import { Icon, StatisticCard } from '@/components';
import { Card, Col, Row } from 'antd';
import { clsx } from 'clsx';

interface StatisticProps {
  className?: string;
}

export const Statistic = ({ className = 'mb-5' }: StatisticProps) => {
  return (
    <Card className={clsx(className)}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} xl={6}>
          <StatisticCard
            hasBg
            title='Total Leads'
            value={10000}
            precision={16}
            icon={<Icon name='users' className='h-[32px] w-[32px]' />}
            text='this month'
            align='flex-end'
            className='sm:justify-center'
          />
        </Col>
        <Col xs={24} sm={12} xl={6} className='mt-8 sm:mt-0 sm:border-l'>
          <StatisticCard
            title='Cold Leads'
            value={4500}
            precision={-3}
            icon={<Icon name='santa_1' className='h-[64px] w-[56px]' />}
            text='this month'
            className='sm:justify-center'
            align='flex-end'
          />
        </Col>
        <Col xs={24} sm={12} xl={6} className='mt-8 xl:mt-0 xl:border-l'>
          <StatisticCard
            title='Hot Leads'
            value={5500}
            precision={2}
            icon={<Icon name='santa_2' className='h-[74px] w-[56px]' />}
            text='this month'
            className='sm:justify-center'
            align='flex-end'
          />
        </Col>
        <Col xs={24} sm={12} xl={6} className='mt-8 sm:border-l xl:mt-0'>
          <StatisticCard
            title='Acquisitions'
            value={200}
            precision={3}
            icon={<Icon name='santa_3' className='h-[74px] w-[56px]' />}
            text='this month'
            className='sm:justify-center'
            align='flex-end'
          />
        </Col>
      </Row>
    </Card>
  );
};
