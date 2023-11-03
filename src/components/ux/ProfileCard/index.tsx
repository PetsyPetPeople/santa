'use client';

import { UserOutlined } from '@ant-design/icons';
import { Avatar, Flex } from 'antd';
import Text from 'antd/es/typography/Text';
import { useSession } from 'next-auth/react';

export function ProfileCard() {
  const session = useSession();

  return (
    <Flex align='center'>
      <Avatar size={54} icon={<UserOutlined className='text-[#2D2D31]' />} className='bg-[#CDCBDB]' />
      <Flex vertical className='ml-4'>
        <Text className='text-[22px]'> {session.data?.user?.name || 'Unknown'}</Text>
        <Text className='text-[#9494A3]'>Last Seen: MON X, 20XX X:XX AM</Text>
        <Text className='text-[#9494A3]'>Client ID: XXXXXXXXX</Text>
      </Flex>
    </Flex>
  );
}
