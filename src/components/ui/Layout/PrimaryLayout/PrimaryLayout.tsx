'use client';

import { Header } from '@/components/ui/Header';
import { Layout } from 'antd';

export function PrimaryLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout className='bg-transparent'>
      <Header />
      <Layout.Content className='site-layout px-6 py-8 lg:px-[80px] lg:py-[50px]'>{children}</Layout.Content>
    </Layout>
  );
}
