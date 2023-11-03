'use client';

import { Header } from '@/components/ui/Header';
import { Layout } from 'antd';

export function PrimaryLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <Header />
      <Layout.Content className='site-layout' style={{ padding: '50px 80px' }}>
        {children}
      </Layout.Content>
    </Layout>
  );
}
