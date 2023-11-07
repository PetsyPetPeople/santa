'use client';

import { Icon } from '@/components';
import { Avatar, Divider, Flex, Typography } from 'antd';
import { InfoItem } from '..';

const { Text, Title } = Typography;

interface InfoVerticalCardProps {
  data: InfoItem[];
}

export function InfoVerticalCard({ data }: InfoVerticalCardProps) {
  return (
    <Flex vertical className='vertical-card'>
      <Flex justify='space-between'>
        <Flex vertical className='flex-auto'>
          <Title level={2} className='mb-0'>
            Nice List
          </Title>
          <Text className='text'>Top Acquisition Performers</Text>
        </Flex>
        <Avatar
          size={60}
          icon={
            <Flex component='span' align='center' justify='center' className='h-full w-full'>
              <Icon name='checked' width={22} height={16} />
            </Flex>
          }
          className='bg-[#F0585833]'
        />
      </Flex>
      <Divider className='my-4 bg-[#D9D9D9]' />

      <Flex justify='space-between' className='mb-2'>
        <Text className='text'>Source</Text>
        <Text className='text'>Average Cost</Text>
      </Flex>

      {data.map((item, index) => (
        <Flex key={index} justify='space-between' className='mt-2'>
          <Text>{item.title}</Text>
          <Text>{item.content}</Text>
        </Flex>
      ))}
    </Flex>
  );
}
