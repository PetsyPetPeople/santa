'use client';

import type { TimeRangePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import React from 'react';

const { RangePicker } = DatePicker;

const rangePresets: TimeRangePickerProps['presets'] = [
  { label: 'Today', value: [dayjs(), dayjs()] },
  { label: 'Yesterday', value: [dayjs().add(-1, 'd'), dayjs()] },
  { label: 'Last Week', value: [dayjs().add(-7, 'd'), dayjs()] },
  { label: 'Last Month', value: [dayjs().add(-1, 'month'), dayjs()] },
  { label: 'Last quarter', value: [dayjs().add(-3, 'month'), dayjs()] },
];

export const DateRange: React.FC = () => {
  const onRangeChange = (dates: null | (Dayjs | null)[], dateStrings: string[]) => {
    if (dates) {
      console.log('From: ', dates[0], ', to: ', dates[1]);
      console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    } else {
      console.log('Clear');
    }
  };

  return (
    <Space direction='vertical' size={12}>
      <RangePicker presets={rangePresets} onChange={onRangeChange} format='DD-MMM-YY' />
    </Space>
  );
};
