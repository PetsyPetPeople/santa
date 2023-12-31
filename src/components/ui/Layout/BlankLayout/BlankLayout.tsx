'use client';

import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';

export function BlankLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout className='bg-transparent'>
      <Content>{children}</Content>
    </Layout>
  );
}
