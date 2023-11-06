'use client';

import { Card, DateRange, Icon, InfoCard, Statistic } from '@/components';
import InfoVerticalCard from '@/components/ux/InfoVerticalCard';
import { Flex, Typography } from 'antd';
import { Fragment } from 'react';

const { Text } = Typography;

export default function HomePage() {
  return (
    <Fragment>
      <Flex align='center' justify='space-between'>
        <Statistic
          title='Total Leads'
          value={100000}
          precision={16}
          icon={<Icon name='user-question' className='h-[48px] w-[48px]' />}
          suffix='%'
          text='this month'
        />

        <Flex vertical>
          <Text className='mb-2 text-[#9494A3]'>Date Range</Text>
          <DateRange />
        </Flex>
      </Flex>
      <InfoCard
        data={[
          { content: 'Total Cold Leads', title: '1000' },
          { content: 'Total Hot Leads', title: '1000' },
          { content: 'Acquisitions', title: '500' },
          { content: 'Average Touch points', title: '10' },
        ]}
        className='mt-16'
      />

      <Card className='mt-5' bodyStyle={{ padding: 60 }}>
        <Flex justify='center' className='gap-8'>
          <InfoVerticalCard
            data={[
              { title: 'Facebook', content: 59 },
              { title: 'Google Ads', content: 70 },
              { title: 'Email', content: 90 },
              { title: 'Canstar', content: 120 },
            ]}
          />
          <InfoVerticalCard
            data={[
              { title: 'Facebook', content: 59 },
              { title: 'Google Ads', content: 70 },
              { title: 'Email', content: 90 },
              { title: 'Canstar', content: 120 },
            ]}
          />
        </Flex>
      </Card>
    </Fragment>
  );
}
