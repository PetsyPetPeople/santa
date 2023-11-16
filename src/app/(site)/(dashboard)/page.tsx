'use client';

import { DateRange, Icon, Statistic, StatisticCard, StatisticStatus } from '@/components';
import { Flex, Typography } from 'antd';
import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import { AttributionCostSection, FirstClickSourceSection, LastClickSourceSection } from './components';

const { Text } = Typography;

const NiceListSectionDynamic = dynamic(
  async () => import('./components/NiceListSection').then((res) => res.NiceListSection),
  { ssr: false },
);

export default function HomePage() {
  return (
    <Fragment>
      <Flex wrap='wrap' align='center' justify='space-between'>
        <StatisticCard
          hasBg
          title='Total Leads'
          value={100000}
          precision={16}
          icon={<Icon name='money' className='ml-1 h-[48px] w-[48px]' />}
          suffix='%'
          text='this month'
          className='mb-6 w-full sm:mb-0 sm:w-auto'
        />

        <Flex vertical>
          <Text className='mb-2 text-[#9494A3]'>Date Range</Text>
          <DateRange />
        </Flex>
      </Flex>

      <Statistic className='mb-8 mt-12' />

      <NiceListSectionDynamic />

      <StatisticStatus />

      <AttributionCostSection />

      <FirstClickSourceSection />

      <LastClickSourceSection />
    </Fragment>
  );
}
