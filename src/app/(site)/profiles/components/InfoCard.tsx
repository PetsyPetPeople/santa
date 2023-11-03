'use client';

import { Card } from '@/components';
import { CardProps, Divider, Empty, Flex } from 'antd';
import Text from 'antd/es/typography/Text';
import Title from 'antd/es/typography/Title';
import clsx from 'clsx';
import { isEmpty } from 'lodash';
import { Fragment } from 'react';

interface InfoItem {
  title: string;
  content: string;
}

interface InfoCardProps extends CardProps {
  data: InfoItem[];
}

export const InfoCard = ({ data, bodyStyle, className, ...props }: InfoCardProps) => {
  return (
    <Card
      className={clsx('h-full', className)}
      bodyStyle={{ display: 'flex', alignItems: 'center', height: '100%', ...bodyStyle }}
      {...props}
    >
      <Flex justify='space-around' align='center' className='w-full px-20'>
        {isEmpty(data) && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
        {!isEmpty(data) &&
          data.map((item, index) => (
            <Fragment key={index}>
              <Flex vertical align='center'>
                <Title level={2} className='mb-1 text-[32px] text-[#2D2D31]'>
                  {item.title}
                </Title>
                <Text className='text-base font-light text-[#9494A3]'>{item.content}</Text>
              </Flex>
              {index !== data.length - 1 && <Divider type='vertical' className='h-[70px] border-[#DBDBDB]' />}
            </Fragment>
          ))}
      </Flex>
    </Card>
  );
};
