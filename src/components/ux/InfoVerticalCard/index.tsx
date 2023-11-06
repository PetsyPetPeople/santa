'use client';

import { Avatar, Col, Divider, Flex, Row, Typography } from 'antd';
import { InfoItem } from '..';

const { Text, Title } = Typography;

interface InfoVerticalCardProps {
  data: InfoItem[];
}

export default function InfoVerticalCard({ data }: InfoVerticalCardProps) {
  return (
    <Flex vertical className='vertical-card'>
      <Row>
        <Col span={18}>
          <Flex vertical>
            <Title className='mb-0'>Nice List</Title>
            <Text className='text'>Top Acquisition Performers</Text>
          </Flex>
        </Col>
        <Col span={6}>
          <Avatar />
        </Col>
      </Row>
      <Divider className='my-4 bg-[#D9D9D9]' />

      <Flex justify='space-between' className='mb-2'>
        <Text className='text'>Source</Text>
        <Text className='text'>Average Cost</Text>
      </Flex>

      {data.map((item, index) => (
        <Flex key={index} justify='space-between' className='mt-2'>
          <Text className='text-sm'>{item.title}</Text>
          <Text className='text-sm'>{item.content}</Text>
        </Flex>
      ))}
    </Flex>
  );
}
