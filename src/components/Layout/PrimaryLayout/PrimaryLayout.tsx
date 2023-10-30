'use client';

import { Header } from '@/components/Header';
import { Layout } from 'antd';

export function PrimaryLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout color='#F9F9FC'>
      <Header />
      <Layout.Content className='site-layout' style={{ padding: '0 50px' }}>
        <div style={{ padding: 24, minHeight: 'calc(100vh - 64px - 70px)' }}>{children}</div>
      </Layout.Content>
      <Layout.Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Layout.Footer>
    </Layout>
  );
}
