'use client';

import { dollarUS } from '@/helpers';
import { Avatar, Divider, Flex, Typography } from 'antd';
import { isNumber } from 'lodash';
import { InfoItem } from '..';

const { Text, Title } = Typography;

interface InfoVerticalCardProps {
  title: React.ReactNode;
  desc: React.ReactNode;
  icon: React.ReactNode;
  iconBgColor?: string;
  data: InfoItem[];
}

export function InfoVerticalCard({ title, desc, icon, iconBgColor, data }: InfoVerticalCardProps) {
  return (
    <Flex vertical className='vertical-card'>
      <Flex justify='space-between'>
        <Flex vertical className='flex-auto'>
          <Title level={2} className='mb-0 font-normal'>
            {title}
          </Title>
          <Text className='text'>{desc}</Text>
        </Flex>
        <Avatar
          size={60}
          icon={
            <Flex component='span' align='center' justify='center' className='h-full w-full'>
              {icon}
            </Flex>
          }
          style={{ backgroundColor: iconBgColor || '#CDCBDB' }}
        />
      </Flex>
      <Divider className='my-4 bg-[#E5E5EF]' />

      <Flex justify='space-between' className='mb-2'>
        <Text className='text'>Source</Text>
        <Text className='text'>Average Cost</Text>
      </Flex>

      {data.map((item, index) => (
        <Flex key={index} justify='space-between' className='mt-2'>
          <Text>
            {index + 1}. {item.title}
          </Text>
          <Text>{isNumber(item.content) ? dollarUS.format(item.content) : item.content}</Text>
        </Flex>
      ))}
    </Flex>
  );
}
