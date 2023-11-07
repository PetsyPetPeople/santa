'use client';

import { UserOutlined } from '@ant-design/icons';
import { Avatar, Flex, Typography } from 'antd';
import { useSession } from 'next-auth/react';

const { Title, Text } = Typography;

export function ProfileCard() {
  const session = useSession();

  return (
    <Flex align='center'>
      <Avatar size={54} icon={<UserOutlined className='text-[#2D2D31]' />} className='bg-[#CDCBDB]' />
      <Flex vertical className='ml-4'>
        <Title level={3} className='mb-1'>
          {' '}
          {session.data?.user?.name || 'Unknown'}
        </Title>
        <Text className='text-base text-[#9494A3]'>Last Seen: MON X, 20XX X:XX AM</Text>
        <Text className='text-base text-[#9494A3]'>Client ID: XXXXXXXXX</Text>
      </Flex>
    </Flex>
  );
}
