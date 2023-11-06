/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { PAGE_CURRENT, PAGE_SIZE } from '@/constants';
import { Table as AntTable, Pagination, PaginationProps, Row } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useState } from 'react';

interface TableProps {
  columns: ColumnsType<any>;
  data: any[];
}

export const Table = ({ columns, data }: TableProps) => {
  const [current, setCurrent] = useState(PAGE_CURRENT);

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrent(page);
  };

  const getData = (current: number, pageSize: number) => {
    return data.slice((current - 1) * pageSize, current * pageSize);
  };

  return (
    <AntTable
      rowClassName='bg-[#f9f9fc]'
      columns={columns}
      dataSource={getData(current, PAGE_SIZE)}
      footer={() => (
        <Row align='middle' justify='space-between' className='mt-4'>
          <Row>{`Showing data ${(current - 1) * PAGE_SIZE + 1} to ${current * PAGE_SIZE} of ${
            data.length
          } entries`}</Row>
          <Pagination current={current} total={data.length} pageSize={PAGE_SIZE} onChange={onChange} />
        </Row>
      )}
      pagination={false}
    />
  );
};
