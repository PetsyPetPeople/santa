'use client';

import { Card, Icon, StatisticCard } from '@/components';
import { Col, Flex, Progress, Row, Typography } from 'antd';

const { Text, Title } = Typography;

export const StatisticStatus = () => {
  return (
    <Row gutter={[30, 30]} className='mt-8'>
      <Col xs={24} lg={12}>
        <Card className='h-full px-8 py-2'>
          <StatisticCard
            value={
              <Flex align='center'>
                <Title level={2} className='mb-2 mt-0 font-normal'>
                  55%
                </Title>
                <Text className='ml-4 text-base font-light text-[#9797AC]'>of leads are unknown</Text>
              </Flex>
            }
            icon={<Icon name='santa_4' className='h-[84px] w-[84px]' />}
            desc={<Progress showInfo={false} percent={50} size={['100%', 12]} strokeColor='#EE4D52' />}
          />
        </Card>
      </Col>
      <Col xs={24} lg={12}>
        <Card className='px-8 py-1'>
          <Flex vertical align='center'>
            <Icon name='point' className='h-[26px] w-[88px]' />
            <Title level={2} className='mb-0 mr-1 mt-1 font-normal'>
              10
            </Title>
            <Text className='text-base font-light text-[#9797AC]'>Average Lead Journey Touchpoints</Text>
          </Flex>
        </Card>
      </Col>
    </Row>
  );
};
