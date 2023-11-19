'use client';

import { Card, Heading } from '@/components';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Col, Flex, Row, Typography } from 'antd';
import { Fragment } from 'react';
const { Text } = Typography;

export default function AccountPage() {
  return (
    <Fragment>
      <Row justify='center'>
        <Col span={10}>
          <Card bodyStyle={{ padding: 30 }}>
            <Heading level={3} text='Account settings' />

            <Row gutter={[24, 24]} className='p-8'>
              <Col span={8}>
                <Avatar size={120}>
                  <UserOutlined style={{ fontSize: 30 }} />
                </Avatar>
              </Col>
              <Col span={16}>
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <Flex gap={8}>
                      <Text className='text-base'>Display name: </Text>
                      <Text className='text-base font-medium'>Dan</Text>
                    </Flex>
                  </Col>
                  <Col span={24}>
                    <Flex gap={8}>
                      <Text className='text-base'>Full name: </Text>
                      <Text className='text-base font-medium'>Mr. Dan</Text>
                    </Flex>
                  </Col>
                  <Col span={24}>
                    <Flex gap={8}>
                      <Text className='text-base'>Email: </Text>
                      <Text className='text-base font-medium'>dan.t@petsy.com.au</Text>
                    </Flex>
                  </Col>
                  <Col span={24}>
                    <Flex gap={8}>
                      <Text className='text-base'>Phone number: </Text>
                      <Text className='text-base font-medium'>222-222-222-222</Text>
                    </Flex>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
