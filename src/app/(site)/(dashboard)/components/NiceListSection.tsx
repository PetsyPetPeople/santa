'use client';

import { Card, Icon, InfoVerticalCard } from '@/components';
import { useMediaQuery } from '@/hooks';
import { Flex } from 'antd';

export function NiceListSection() {
  const isDesktop = useMediaQuery(1024);

  return (
    <Card
      hasBoxShadow={false}
      className='mt-8 rounded-[20px]'
      bodyStyle={{ borderRadius: 20, backgroundColor: '#EEEEF5', padding: isDesktop ? 60 : 24 }}
    >
      <Flex wrap='wrap' justify='center' className='gap-8'>
        <InfoVerticalCard
          title='Nice List'
          desc='Top Acquisition Performers'
          icon={<Icon name='checked' width={28} height={24} />}
          iconBgColor='#FDDEDE'
          data={[
            { title: 'Facebook', content: 59 },
            { title: 'Google Ads', content: 70 },
            { title: 'Email', content: 90 },
            { title: 'Canstar', content: 120 },
          ]}
        />
        <InfoVerticalCard
          title='Naughty List'
          desc='Worst Acquisition Performers'
          icon={<Icon name='close' width={22} height={22} />}
          data={[
            { title: 'Instagram', content: 59 },
            { title: 'Tik Tok', content: 70 },
            { title: 'LinkedIn', content: 90 },
            { title: 'SMS', content: 120 },
          ]}
        />
      </Flex>
    </Card>
  );
}
