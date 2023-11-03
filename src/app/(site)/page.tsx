'use client';

import { Statistic } from '@/components';
import { ArrowUpOutlined } from '@ant-design/icons';

export default function HomePage() {
  return (
    <Statistic
      title='Total Leads'
      value={10000}
      precision={16}
      prefix={<ArrowUpOutlined />}
      suffix='%'
      text='this month'
    />
  );
}
