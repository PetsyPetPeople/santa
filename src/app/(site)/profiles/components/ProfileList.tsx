'use client';

import { Button, Card, Table } from '@/components';
import { SearchOutlined } from '@ant-design/icons';
import { Divider, Flex, Input, Select, Space, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import clsx from 'clsx';

const { Title } = Typography;
const { Option } = Select;

interface DataType {
  key: string;
  leadName: string;
  costToDate: number;
  firstTouchPoint: string;
  lastTouchPoint: string;
  status: string;
}

const items = [
  {
    label: 'Newest',
    value: 'newest',
  },
  {
    label: 'Oldest',
    value: 'oldest',
  },
];

const columns: ColumnsType<DataType> = [
  {
    title: 'Lead Name',
    dataIndex: 'leadName',
    key: 'leadName',
    className: 'font-light',
  },
  {
    title: 'Cost to Date',
    dataIndex: 'costToDate',
    key: 'costToDate',
    className: 'font-light',
  },
  {
    title: 'First Touch Point',
    dataIndex: 'firstTouchPoint',
    key: 'firstTouchPoint',
    className: 'font-light',
  },
  {
    title: 'Last Touch Point',
    dataIndex: 'lastTouchPoint',
    key: 'lastTouchPoint',
    className: 'font-light',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    className: 'font-light',
    render: (_, record) => (
      <span className={clsx(record.status === 'Hot' ? 'text-[#F05858]' : 'text-[#56A9F5]')}>{record.status}</span>
    ),
  },

  {
    title: '',
    key: 'action',
    className: 'text-center',
    width: 150,
    render: (_, record) => (
      <Space size='middle'>
        <Button buttonType='link' href={`/profiles/${record.key}?status=${record.status}`} className='button pt-[5px]'>
          View Attribution
        </Button>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    leadName: 'Unknown',
    costToDate: 100,
    firstTouchPoint: '5 FEB 2023',
    lastTouchPoint: '10 MAR 2023',
    status: 'Hot',
  },
  {
    key: '2',
    leadName: 'Floyd Miles',
    costToDate: 100,
    firstTouchPoint: '5 FEB 2023',
    lastTouchPoint: '10 MAR 2023',
    status: 'Hot',
  },
  {
    key: '3',
    leadName: 'Jerome Bell',
    costToDate: 100,
    firstTouchPoint: '5 FEB 2023',
    lastTouchPoint: '10 MAR 2023',
    status: 'Cold',
  },
  {
    key: '4',
    leadName: 'Unknown',
    costToDate: 100,
    firstTouchPoint: '5 FEB 2023',
    lastTouchPoint: '10 MAR 2023',
    status: 'Hot',
  },
  {
    key: '5',
    leadName: 'Floyd Miles',
    costToDate: 100,
    firstTouchPoint: '5 FEB 2023',
    lastTouchPoint: '10 MAR 2023',
    status: 'Hot',
  },
  {
    key: '6',
    leadName: 'Jerome Bell',
    costToDate: 100,
    firstTouchPoint: '5 FEB 2023',
    lastTouchPoint: '10 MAR 2023',
    status: 'Cold',
  },
  {
    key: '7',
    leadName: 'Unknown',
    costToDate: 100,
    firstTouchPoint: '5 FEB 2023',
    lastTouchPoint: '10 MAR 2023',
    status: 'Hot',
  },
  {
    key: '8',
    leadName: 'Floyd Miles',
    costToDate: 100,
    firstTouchPoint: '5 FEB 2023',
    lastTouchPoint: '10 MAR 2023',
    status: 'Hot',
  },
  {
    key: '9',
    leadName: 'Jerome Bell',
    costToDate: 100,
    firstTouchPoint: '5 FEB 2023',
    lastTouchPoint: '10 MAR 2023',
    status: 'Cold',
  },
  {
    key: '10',
    leadName: 'Unknown',
    costToDate: 100,
    firstTouchPoint: '5 FEB 2023',
    lastTouchPoint: '10 MAR 2023',
    status: 'Hot',
  },
  {
    key: '11',
    leadName: 'Floyd Miles',
    costToDate: 100,
    firstTouchPoint: '5 FEB 2023',
    lastTouchPoint: '10 MAR 2023',
    status: 'Hot',
  },
  {
    key: '12',
    leadName: 'Jerome Bell',
    costToDate: 100,
    firstTouchPoint: '5 FEB 2023',
    lastTouchPoint: '10 MAR 2023',
    status: 'Cold',
  },
];

export const ProfileList = () => {
  return (
    <Card className='p-6 lg:px-[90px] lg:py-[54px]'>
      <Flex align='center' justify='space-between' className='w-full'>
        <Title level={3} className='mb-0'>
          All Leads
        </Title>
        <Space>
          <Input
            className='w-[200px] rounded-[10px] bg-white'
            placeholder='Search'
            prefix={<SearchOutlined style={{ fontSize: 20, color: '#7E7E7E' }} />}
          />

          <Flex align='center' className='rounded-[10px] border pl-3'>
            <span>Short by:</span>
            <Select
              defaultValue='newest'
              bordered={false}
              popupMatchSelectWidth={120}
              placement='bottomRight'
              className='w-[90px]'
            >
              {items.map((item) => (
                <Option key={item?.value} value={item.value} className='rounded-[10px] bg-white'>
                  {item.label}
                </Option>
              ))}
            </Select>
          </Flex>
        </Space>
      </Flex>
      <Divider className='mt-4' />
      <Table columns={columns} data={data} />
    </Card>
  );
};
