'use client';

import { LoginOutlined } from '@ant-design/icons';
import { Flex, Layout, Menu } from 'antd';
import Text from 'antd/es/typography/Text';
import Title from 'antd/es/typography/Title';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const MENU = [
  { name: 'Master Dashboard', href: '/' },
  { name: 'Profile List', href: '/profiles' },
];

export function Header() {
  const session = useSession();

  return (
    <Layout.Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className='demo-logo' />
      <Title level={4} className='mb-0 mr-3 text-white'>
        SANTA LOGO
      </Title>

      <Menu
        theme='dark'
        mode='horizontal'
        className='ml-12'
        items={MENU.map((e, index) => {
          const key = index + 1;
          return {
            key,
            label: <Link href={{ href: e.href }}>{e.name}</Link>,
            href: e.href,
          };
        })}
      />

      {session.status === 'authenticated' && (
        <Flex align='center' className='ml-auto'>
          <Text className='mb-0 mr-3 text-white'>Hello, {session.data.user?.name}</Text>
          <button className='flex items-center' onClick={() => signOut()}>
            <LoginOutlined style={{ fontSize: '24px' }} className='mb-0 mr-3 text-white' />
          </button>
        </Flex>
      )}
    </Layout.Header>
  );
}
