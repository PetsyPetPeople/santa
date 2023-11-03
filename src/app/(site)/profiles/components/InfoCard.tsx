'use client';

import { Card } from '@/components';
import { Divider, Flex } from 'antd';
import Text from 'antd/es/typography/Text';
import Title from 'antd/es/typography/Title';

export const InfoCard = () => {
  return (
    <Card className='h-full' bodyStyle={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <Flex justify='space-between' align='center' className='w-full px-20'>
        <Flex vertical align='center'>
          <Title level={2} className='mb-1 text-[32px] text-[#2D2D31]'>
            Hard
          </Title>
          <Text className='text-base font-light text-[#9494A3]'>Lead Status</Text>
        </Flex>
        <Divider type='vertical' className='h-[70px] border-[#DBDBDB]' />
        <Flex vertical align='center'>
          <Title level={2} className='mb-1 text-[32px] text-[#2D2D31]'>
            6
          </Title>
          <Text className='text-base font-light text-[#9494A3]'>Touch Points</Text>
        </Flex>
        <Divider type='vertical' className='h-[70px] border-[#DBDBDB]' />
        <Flex vertical align='center'>
          <Title level={2} className='mb-1 text-[32px] text-[#2D2D31]'>
            $600
          </Title>
          <Text className='text-base font-light text-[#9494A3]'>Journey Cost</Text>
        </Flex>
      </Flex>
    </Card>
  );
};
