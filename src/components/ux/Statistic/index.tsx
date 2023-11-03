'use client';

import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Avatar, Flex } from 'antd';
import Text from 'antd/es/typography/Text';
import Title from 'antd/es/typography/Title';
import clsx from 'clsx';
import { FC } from 'react';

interface StatisticProps {
  title: string;
  value: number;
  precision?: number;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  text?: string;
  icon?: React.ReactNode;
}

export const Statistic: FC<StatisticProps> = ({ title, value, precision, prefix, suffix, text, icon }) => {
  const renderPrefix = () => {
    if (prefix) return prefix;
    if (precision && precision >= 0) return <ArrowUpOutlined style={{ color: '#00AC4F' }} />;
    if (precision) return <ArrowDownOutlined style={{ color: '#F05858' }} />;

    return null;
  };

  return (
    <Flex>
      <Avatar
        size={84}
        icon={
          (
            <Flex component='span' align='center' justify='center' className='h-full w-full'>
              {icon}
            </Flex>
          ) || ''
        }
        className='bg-[#F0585833]'
      />
      <Flex vertical className='ml-4'>
        <Text className='mb-0 text-[#9494A3]'>{title}</Text>
        <Title level={3} className='mb-2 mt-0 font-normal'>
          {value}
        </Title>
        <Flex align='center' gap={3}>
          {renderPrefix()}
          <Text className={clsx(precision && precision >= 0 ? 'text-[#00AC4F]' : 'text-[#F05858]')}>
            {precision}
            {suffix}
          </Text>
          <Text className='text-[#292D32]'>{text}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
