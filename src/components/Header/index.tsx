'use client';

import { Button, Flex, Layout, Menu, MenuProps } from 'antd';
import Title from 'antd/es/typography/Title';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const items: MenuProps['items'] = [
  {
    label: <Link href='/profiles'>Master Dashboard</Link>,
    key: 'dashboard',
  },
  {
    label: <Link href='/profiles'>Profile List</Link>,
    key: 'profiles',
  },
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
        justifyContent: 'space-between',
      }}
      className='border-b'
    >
      <Title level={4} className='mb-0 mr-3'>
        SANTA LOGO
      </Title>

      {session.status === 'authenticated' && (
        <Flex align='center' justify='end' className='flex-1'>
          <Menu
            mode='horizontal'
            items={items}
            defaultSelectedKeys={['dashboard']}
            className='j mr-8 flex flex-1 justify-end'
          />
          <Button onClick={() => signOut()} className='px-10'>
            Log out
          </Button>
        </Flex>
      )}
    </Layout.Header>
  );
}
