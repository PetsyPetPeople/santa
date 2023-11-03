'use client';

import { Button, Card } from '@/components';
import { SearchOutlined } from '@ant-design/icons';
import { Flex, Input, Select, Space, Table, Typography } from 'antd';
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
    render: (_, record) => (
      <Space size='middle'>
        <Button buttonType='link' href={`/profiles/${record.key}`}>
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
    <Card bodyStyle={{ padding: 48 }}>
      <Flex align='center' justify='space-between' className='mb-8 w-full'>
        <Title level={2} className='mb-0'>
          All Leads
        </Title>
        <Space>
          <Input
            size='large'
            className='w-[215px] rounded-[10px] bg-white text-sm'
            placeholder='Search'
            prefix={<SearchOutlined style={{ color: '#7E7E7E' }} />}
          />
          <Select size='large' placeholder='Short by : Newest' className='w-[170px] '>
            <Option value='Newest' className='rounded-[10px] bg-white text-sm'>
              Newest
            </Option>
          </Select>
        </Space>
      </Flex>
      <Table rowClassName='bg-[#f9f9fc]' columns={columns} dataSource={data} footer={() => 'Footer'} />
    </Card>
  );
};
