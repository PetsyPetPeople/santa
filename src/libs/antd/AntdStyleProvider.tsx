'use client';

import { themeConfig } from '@/themes';
import { ConfigProvider } from 'antd';
import { PropsWithChildren } from 'react';
import { AntdProvider } from './AntdProvider';

export function AntdStyleProvider({ children }: PropsWithChildren) {
  return (
    <ConfigProvider theme={themeConfig}>
      <AntdProvider>{children}</AntdProvider>
    </ConfigProvider>
  );
}
