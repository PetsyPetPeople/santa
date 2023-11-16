'use client';

import { dollarUS } from '@/helpers';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Avatar, Flex, FlexProps } from 'antd';
import Text from 'antd/es/typography/Text';
import Title from 'antd/es/typography/Title';
import clsx from 'clsx';
import { isNumber } from 'lodash';
import { FC } from 'react';

interface StatisticCardProps extends Omit<FlexProps, 'prefix' | 'children'> {
  title?: string;
  value: number | string | React.ReactNode;
  fontSizeValue?: (typeof TITLE_ELE_LIST)[number];
  precision?: number;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  text?: string;
  icon?: React.ReactNode;
  desc?: React.ReactNode;
  avatarClassName?: string;
  textClassName?: string;
  hasBg?: boolean;
}

export const StatisticCard: FC<StatisticCardProps> = ({
  title,
  value = 0,
  fontSizeValue = 3,
  precision,
  desc,
  prefix,
  suffix = '%',
  text,
  icon,
  avatarClassName = 'bg-[#CDCBDB]',
  textClassName = 'text-xs',
  hasBg = false,
  ...rest
}) => {
  const renderPrefix = () => {
    if (prefix) return prefix;
    if (precision && precision >= 0) return <ArrowUpOutlined style={{ color: '#00AC4F' }} />;
    if (precision) return <ArrowDownOutlined style={{ color: '#F05858' }} />;

    return null;
  };

  return (
    <Flex {...rest}>
      {hasBg ? (
        <Avatar
          size={86}
          icon={
            (
              <Flex component='span' align='center' justify='center' className='h-full w-full'>
                {icon}
              </Flex>
            ) || ''
          }
          className={clsx(avatarClassName)}
        />
      ) : (
        <Flex component='span' align='center' justify='center' className='h-[84px] w-[84px]'>
          {icon}
        </Flex>
      )}

      <Flex vertical className='ml-4'>
        <Text className='mb-0 text-[#9797AC]'>{title}</Text>
        <Title level={fontSizeValue} className='mb-2 mt-0 font-normal'>
          {isNumber(value) ? dollarUS.format(value) : value}
        </Title>

        <Flex align='center' gap={3} className='text-xs'>
          {renderPrefix()}
          {precision ? (
            <Text className={clsx('text-xs', precision && precision >= 0 ? 'text-[#00AC4F]' : 'text-[#F05858]')}>
              <span className='font-medium'>
                {precision} {suffix}
              </span>
            </Text>
          ) : null}
          <Text className={clsx('text-[#292D32]', textClassName)}>{text}</Text>
        </Flex>

        {desc || null}
      </Flex>
    </Flex>
  );
};
