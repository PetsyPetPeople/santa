'use client';

import { Card, InfoVerticalCard } from '@/components';
import { Flex } from 'antd';

export function NiceListSection() {
  return (
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
  );
}
