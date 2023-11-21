'use client';

import { Card, Icon, StatisticCard } from '@/components';
import { Col, Flex, Progress, Row, Typography } from 'antd';

const { Text, Title } = Typography;

export const StatisticStatus = () => {
  return (
    <Row gutter={[30, 30]} className='mt-8'>
      <Col xs={24} xl={8} className='h-full'>
        <Card>
          <StatisticCard
            value={
              <Flex align='center'>
                <Title level={3} className='m-0 text-[24px] font-normal'>
                  55%
                </Title>
                <Text className='ml-4 text-base font-light text-[#9797AC]'>of leads are unknown</Text>
              </Flex>
            }
            icon={<Icon name='santa_4' className='h-[84px] w-[84px]' />}
            desc={<Progress showInfo={false} percent={50} size={['100%', 12]} strokeColor='#EE4D52' />}
            className='w-full px-8 py-3'
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} xl={8} className='h-full'>
        <Card>
          <Flex vertical align='center' className='w-full px-8 py-1'>
            <Icon name='point' className='h-[26px] w-[88px]' />
            <Title level={3} className='mb-0 mr-1 mt-2 text-[24px] font-normal'>
              10
            </Title>
            <Text className='text-base font-light text-[#9797AC]'>Average Lead Journey Touchpoints</Text>
          </Flex>
        </Card>
      </Col>
      <Col xs={24} sm={12} xl={8} className='h-full'>
        <Card>
          <Flex vertical align='center' className='w-full px-8 py-1'>
            <Icon name='roas' className='h-[26px] w-[88px]' />
            <Title level={3} className='mb-0 mt-2 text-[24px] font-normal'>
              55%
            </Title>
            <Text className='text-base font-light text-[#9797AC]'>Average ROAS</Text>
          </Flex>
        </Card>
      </Col>
    </Row>
  );
};
