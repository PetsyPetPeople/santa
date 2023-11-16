'use client';

import { Icon } from '@/components';
import { EllipsisOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Flex, Layout, Menu, MenuProps } from 'antd';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

const MAIN_MENU: MenuProps['items'] = [
  {
    label: <Link href='/'>Dashboard</Link>,
    key: 'dashboard',
  },
  {
    label: <Link href='/source-map'>Source Map</Link>,
    key: 'source-map',
  },
  {
    label: <Link href='/profiles'>Profile List</Link>,
    key: 'profiles',
  },
];

const items: MenuProps['items'] = [
  {
    label: <Link href='/account'>Account</Link>,
    icon: <UserOutlined />,
    key: 'account',
  },
  {
    label: <a onClick={() => signOut()}>Logout</a>,
    icon: <LogoutOutlined />,
    key: 'logout',
  },
];

export function Header() {
  const session = useSession();
  const activeSegment = useSelectedLayoutSegment();
  const activeMenu = !activeSegment || activeSegment === '(dashboard)' ? 'dashboard' : activeSegment || '';

  return (
    <Layout.Header className='sticky top-0 z-50 flex w-full items-center border-b px-6 lg:px-[80px]'>
      <Link href='/' className='w-[140px] shrink-0' passHref>
        <Icon name='logo' width={140} height={42} />
      </Link>

      {session.status === 'authenticated' && (
        <Flex align='center' justify='end' className='flex-auto'>
          <Menu
            mode='horizontal'
            overflowedIndicator={<EllipsisOutlined />}
            items={MAIN_MENU}
            selectedKeys={[activeMenu]}
            className='flex w-full justify-end'
          />
        </Flex>
      )}

      <Dropdown
        menu={{ items }}
        trigger={['click']}
        placement='bottomRight'
        overlayClassName='w-[140px]'
        className='ml-auto'
      >
        <a onClick={(e) => e.preventDefault()}>
          <Avatar icon={<UserOutlined />} />
        </a>
      </Dropdown>
    </Layout.Header>
  );
}
