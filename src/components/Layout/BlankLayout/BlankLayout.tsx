'use client';

import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';

export function BlankLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <Content>{children}</Content>
    </Layout>
  );
}
