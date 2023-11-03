'use client';

import { Icon } from '@/components';
import { Button, Flex, Layout, Menu, MenuProps } from 'antd';
import Title from 'antd/es/typography/Title';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

const items: MenuProps['items'] = [
  {
    label: <Link href='/'>Master Dashboard</Link>,
    key: 'dashboard',
  },
  {
    label: <Link href='/profiles'>Profile List</Link>,
    key: 'profiles',
  },
];

export function Header() {
  const session = useSession();
  const activeSegment = useSelectedLayoutSegment();
  const activeMenu = !activeSegment ? 'dashboard' : activeSegment || '';

  return (
    <Layout.Header className='sticky top-0 z-50 flex w-full items-center justify-between border-b'>
      <Title level={4} className='mb-0 mr-3'>
        <Icon name='logo' width={140} height={42} />
      </Title>

      {session.status === 'authenticated' && (
        <Flex align='center' justify='end' className='flex-1'>
          <Menu mode='horizontal' items={items} selectedKeys={[activeMenu]} className='mr-8 flex flex-1 justify-end' />
          <Button onClick={() => signOut()} className='px-10'>
            Log out
          </Button>
        </Flex>
      )}
    </Layout.Header>
  );
}
