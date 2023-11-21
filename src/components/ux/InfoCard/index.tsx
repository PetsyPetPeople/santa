'use client';

import { Card, Heading, Icon, IconName } from '@/components';
import { dollarUS } from '@/helpers';
import { useMediaQuery } from '@/hooks';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { CardProps, Divider, Empty, Flex } from 'antd';
import Text from 'antd/es/typography/Text';
import Title from 'antd/es/typography/Title';
import clsx from 'clsx';
import { isEmpty } from 'lodash';
import { Fragment } from 'react';

export enum EInfoCardType {
  LEAD_STATUS = 'LEAD_STATUS',
  DURATION = 'DURATION',
  TOUCH_POINTS = 'TOUCH_POINTS',
  JOURNEY_COST = 'JOURNEY_COST',
  ROAS = 'ROAS',
}
export interface InfoItem {
  title: string;
  content: string | number;
  type?: EInfoCardType;
  value?: string | number;
  precision?: boolean;
}

interface InfoCardProps extends CardProps {
  data: InfoItem[];
}

export const InfoCard = ({ data, bodyStyle, className, ...props }: InfoCardProps) => {
  const isDesktop = useMediaQuery(1024);

  return (
    <Card
      className={clsx('h-full rounded-[20px]', className)}
      bodyStyle={{ height: '100%', borderRadius: 20, padding: 30, paddingBottom: isDesktop ? 30 : 12, ...bodyStyle }}
      {...props}
    >
      <Flex vertical className='h-full'>
        <Heading text='Performance' level={3} />
        <Flex className='align-center flex-auto'>
          <Flex justify='space-around' align='center' className='w-full'>
            {isEmpty(data) && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
            {!isEmpty(data) &&
              data.map((item, index) => (
                <Flex key={index} vertical align='center'>
                  <Flex align='center' className='mb-3 h-[82px]'>
                    {item.type !== EInfoCardType.LEAD_STATUS ? (
                      <Title level={3} className='mb-0 text-[24px] font-light'>
                        {item.type === EInfoCardType.JOURNEY_COST || item.type === EInfoCardType.ROAS
                          ? dollarUS.format(+item.content)
                          : item.content}
                      </Title>
                    ) : (
                      <Icon name={item.content as IconName} width={62} height={82} />
                    )}
                  </Flex>
                  <Text className='text-[#9797AC]'>
                    {item.type === EInfoCardType.ROAS ? item.title.toUpperCase() : item.title}
                  </Text>

                  <Divider className='my-2 bg-[#E5E5EF]' />

                  <Text className={clsx('text-sm', item.type === EInfoCardType.LEAD_STATUS && 'text-[#30BC70]')}>
                    {item.type !== EInfoCardType.LEAD_STATUS ? (
                      <Fragment>
                        {item.precision ? (
                          <ArrowUpOutlined style={{ color: '#00AC4F' }} />
                        ) : (
                          <ArrowDownOutlined style={{ color: '#F05858' }} />
                        )}{' '}
                        / Avg:{' '}
                      </Fragment>
                    ) : null}

                    {(item.type === EInfoCardType.JOURNEY_COST || item.type === EInfoCardType.ROAS) && item.value
                      ? dollarUS.format(+item.value)
                      : item.value}
                  </Text>
                </Flex>
              ))}
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};
