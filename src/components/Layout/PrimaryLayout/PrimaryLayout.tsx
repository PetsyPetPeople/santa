'use client';

import { Header } from '@/components/Header';
import { Layout } from 'antd';

export function PrimaryLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <Header />
      <Layout.Content className='site-layout' style={{ padding: '0 50px' }}>
        <div style={{ padding: 24, minHeight: 'calc(100vh - 64px - 70px)' }}>{children}</div>
      </Layout.Content>
    </Layout>
  );
}
