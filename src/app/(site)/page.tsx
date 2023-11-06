'use client';

import { DateRange, Statistic } from '@/components';
import { ArrowUpOutlined } from '@ant-design/icons';
import { Flex, Typography } from 'antd';
import { Fragment } from 'react';
import { InfoCard } from './profiles/components';

const INFO_MOCK_DATA = [
  { content: 'Total Cold Leads', title: '1000' },
  { content: 'Total Hot Leads', title: '1000' },
  { content: 'Acquisitions', title: '500' },
  { content: 'Average Touch points', title: '10' },
];

const { Text } = Typography;

export default function HomePage() {
  return (
    <Fragment>
      <Flex align='center' justify='space-between'>
        <Statistic
          title='Total Leads'
          value={10000}
          precision={16}
          prefix={<ArrowUpOutlined />}
          suffix='%'
          text='this month'
        />

        <Flex vertical>
          <Text className='mb-2'>Date Range</Text>
          <DateRange />
        </Flex>
      </Flex>
      <InfoCard data={INFO_MOCK_DATA} className='mt-16' />
    </Fragment>
  );
}
