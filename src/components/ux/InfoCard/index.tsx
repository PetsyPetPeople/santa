'use client';

import { Card, Heading } from '@/components';
import { CardProps, Divider, Empty, Flex } from 'antd';
import Text from 'antd/es/typography/Text';
import Title from 'antd/es/typography/Title';
import clsx from 'clsx';
import { isEmpty } from 'lodash';
import { Fragment } from 'react';

export interface InfoItem {
  title: string;
  content: string | number;
}

interface InfoCardProps extends CardProps {
  data: InfoItem[];
}

export const InfoCard = ({ data, bodyStyle, className, ...props }: InfoCardProps) => {
  return (
    <Card
      className={clsx('h-full rounded-[20px]', className)}
      bodyStyle={{ height: '100%', borderRadius: 20, ...bodyStyle }}
      {...props}
    >
      <Flex vertical className='h-full'>
        <Heading text='Performance' level={3} />
        <Flex className='align-center flex-auto'>
          <Flex justify='space-around' align='center' className='w-full px-20'>
            {isEmpty(data) && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
            {!isEmpty(data) &&
              data.map((item, index) => (
                <Fragment key={index}>
                  <Flex vertical align='center'>
                    <Title level={2} className='mb-1 text-[32px] text-[#353538]'>
                      {item.title}
                    </Title>
                    <Text className='text-base text-[#9494A3]'>{item.content}</Text>
                  </Flex>
                  {index !== data.length - 1 && <Divider type='vertical' className='h-[70px] border-[#DBDBDB]' />}
                </Fragment>
              ))}
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};
