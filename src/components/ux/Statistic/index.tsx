'use client';

import { UserOutlined } from '@ant-design/icons';
import { Avatar, Flex } from 'antd';
import Text from 'antd/es/typography/Text';
import Title from 'antd/es/typography/Title';
import { useSession } from 'next-auth/react';

interface StatisticProps {
  title: string;
  value: number;
  precision?: number;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  text?: string;
  icon?: React.ReactNode;
}
export function Statistic({ title, value, precision, prefix, suffix, text, icon }: StatisticProps) {
  const session = useSession();
  console.log('session :>> ', session);

  return (
    <Flex>
      <Avatar size={84} icon={icon || <UserOutlined className='text-[#F05858]' />} className='bg-[#F0585833]' />
      <Flex vertical className='ml-4'>
        <Text className='mb-0 text-[#9494A3]'>{title}</Text>
        <Title level={3} className='mb-2 mt-0 font-normal'>
          {value}
        </Title>
        <Flex align='center' gap={2}>
          {prefix}
          <Text>{precision}</Text>
          <Text>{suffix}</Text>
          <Text>{text}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
