'use client';

import { Button, Card } from '@/components';
import { Table } from '@/components/ui/Table';
import { SearchOutlined } from '@ant-design/icons';
import { Flex, Input, Select, Space, Typography } from 'antd';
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
    key: 'newest',
  },
  {
    label: 'Oldest',
    key: 'oldest',
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
    render: (_, record) => <span className={clsx(record.status === 'Hot' && 'text-[#F05858]')}>{record.status}</span>,
  },

  {
    title: '',
    key: 'action',
    className: 'text-center',
    width: 150,
    render: (_, record) => (
      <Space size='middle'>
        <Button buttonType='link' href={`/profiles/${record.key}`} className='button'>
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
    <Card bodyStyle={{ padding: 48, paddingBottom: 24 }}>
      <Flex align='center' justify='space-between' className='mb-8 w-full px-4'>
        <Title level={2} className='mb-0'>
          All Leads
        </Title>
        <Space>
          <Input
            size='large'
            className='w-[215px] rounded-[10px] bg-white text-sm'
            placeholder='Search'
            prefix={<SearchOutlined style={{ fontSize: 20, color: '#7E7E7E' }} />}
          />

          <Select size='large' placeholder='Short bycon' className='w-[170px] '>
            {items.map((item) => (
              <Option key={item?.key} value={item.key} className='rounded-[10px] bg-white text-sm'>
                {item.label}
              </Option>
            ))}
          </Select>
        </Space>
      </Flex>

      <Table columns={columns} data={data} />
    </Card>
  );
};
