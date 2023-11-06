'use client';

import { themeConfig } from '@/themes';
import { App, ConfigProvider } from 'antd';
import { PropsWithChildren } from 'react';
import { AntProvider } from './AntProvider';

export function AntStyleProvider({ children }: PropsWithChildren) {
  return (
    <ConfigProvider theme={themeConfig}>
      <AntProvider>
        <App>{children}</App>
      </AntProvider>
    </ConfigProvider>
  );
}
