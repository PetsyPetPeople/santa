/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Card } from '@/components';
import { PAGE_CURRENT, PAGE_SIZE } from '@/constants';
import { useApp } from '@/hooks';
import {
  Button,
  Flex,
  Form,
  Input,
  InputNumber,
  Pagination,
  PaginationProps,
  Popconfirm,
  Row,
  Space,
  Table,
  Tooltip,
  Typography,
} from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';

const { Title } = Typography;

interface DataType {
  key: string;
  platform: string;
  campaignObjective: string;
  funnelTarget: string;
  source: string;
  medium: string;
  campaignName: string;
  campaignTerm: string;
  campaignContent: string;
  utm: string;
  heading: string;
  creative: string;
  costPerClick: number;
}

const data: DataType[] = [
  {
    key: '1',
    platform: 'Canstar',
    campaignObjective: 'Lead',
    funnelTarget: 'TOF',
    source: 'Canstar SPL',
    medium: 'Aggregators',
    campaignName: 'Canstar SPL',
    campaignTerm: 'Aggregators',
    campaignContent: 'Aggregators',
    utm: 'https://widgets.canstar.com.au/widgets/lead?id=-839846364282569262716&collection=petinsurance&sponsored=true',
    heading: 'Direct to Quote',
    creative: '',
    costPerClick: 5,
  },
  {
    key: '2',
    platform: 'Facebook',
    campaignObjective: 'Nurture',
    funnelTarget: 'BOF',
    source: '',
    medium: '',
    campaignName: '',
    campaignTerm: '',
    campaignContent: 'Retarget finder',
    utm: 'https://facebook.com/widgets/lead?id=-839846364282569262716&collection=petinsurance&sponsored=true',
    heading: 'Finder better deal',
    creative: 'Hard',
    costPerClick: 6,
  },
  {
    key: '3',
    platform: 'Instagram',
    campaignObjective: 'Nurture',
    funnelTarget: 'BOF',
    source: '',
    medium: '',
    campaignName: '',
    campaignTerm: 'Retarget finder',
    campaignContent: 'Finder Table Click',
    utm: 'https://widgets.canstar.com.au/widgets/lead?id=-839846364282569262716&collection=petinsurance&sponsored=true',
    heading: 'Save Money',
    creative: 'Old Direct',
    costPerClick: 7.5,
  },
  {
    key: '4',
    platform: 'Finder',
    campaignObjective: 'Lead',
    funnelTarget: 'BOF',
    source: 'Finder',
    medium: 'Aggregators',
    campaignName: 'Finder Table',
    campaignTerm: 'Finder Table',
    campaignContent: 'Soft',
    utm: 'https://widgets.canstar.com.au/widgets/lead?id=-839846364282569262716&collection=petinsurance&sponsored=true',
    heading: 'Finder better deal',
    creative: 'Soft',
    costPerClick: 7.5,
  },
];

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: DataType;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({ editing, dataIndex, inputType, children, ...restProps }) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          // rules={[
          //   {
          //     required: true,
          //     message: `Please Input ${title}!`,
          //   },
          // ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export const SourceList = () => {
  const { notification } = useApp();
  const [current, setCurrent] = useState(PAGE_CURRENT);
  const [dataSource, setDataSource] = useState<DataType[]>(data);
  const [count, setCount] = useState(data.length + 1);

  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record: DataType) => record.key === editingKey;
  const isAdding = count > data.length + 1;

  const handleEdit = (record: Partial<DataType> & { key: React.Key }) => {
    form.setFieldsValue({ ...record });
    setEditingKey(record.key);
  };

  const handleCancel = () => {
    setEditingKey('');
    form.resetFields();
  };

  const handleCancelAdd = () => {
    setDataSource((prev) => prev.slice(0, prev.length - 1));
    setCount((prev) => prev - 1);
    form.resetFields();
  };

  const handleAdd = () => {
    const newData: DataType = {
      key: '',
      platform: '',
      campaignObjective: '',
      funnelTarget: '',
      source: '',
      medium: '',
      campaignName: '',
      campaignTerm: '',
      campaignContent: '',
      utm: '',
      heading: '',
      creative: '',
      costPerClick: 5,
    };

    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };

  const handleDelete = (key: React.Key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const handleSave = async (key?: React.Key) => {
    try {
      const row = (await form.validateFields()) as DataType;

      const newData = [...dataSource];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setDataSource(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setDataSource(newData);
        setEditingKey('');
      }

      form.resetFields();
    } catch (errInfo) {
      notification.error({ message: `Validate Failed: ${errInfo}` });
    }
  };

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrent(page);
  };

  const getData = (current: number, pageSize: number) => {
    return dataSource.slice((current - 1) * pageSize, current * pageSize);
  };

  const columns = [
    {
      title: 'Platform',
      dataIndex: 'platform',
      key: 'platform',
      width: 120,
      className: 'font-light',
      ellipsis: true,
      editable: true,
    },
    {
      title: 'Campaign Objective',
      dataIndex: 'campaignObjective',
      key: 'campaignObjective',
      width: 170,
      className: 'font-light',
      ellipsis: true,
      editable: true,
    },
    {
      title: 'Funnel Target',
      dataIndex: 'funnelTarget',
      key: 'funnelTarget',
      width: 140,
      className: 'font-light',
      ellipsis: true,
      editable: true,
    },
    {
      title: 'Source',
      dataIndex: 'source',
      key: 'source',
      width: 140,
      className: 'font-light',
      ellipsis: true,
      editable: true,
      render: (i: any, record: DataType) => <span>{record.source || '-'}</span>,
    },
    {
      title: 'Medium',
      dataIndex: 'medium',
      key: 'medium',
      width: 140,
      className: 'font-light',
      ellipsis: true,
      editable: true,
      render: (i: any, record: DataType) => <span>{record.medium || '-'}</span>,
    },
    {
      title: 'Campaign Name',
      dataIndex: 'campaignName',
      key: 'campaignName',
      width: 160,
      className: 'font-light',
      ellipsis: true,
      editable: true,
      render: (i: any, record: DataType) => <span>{record.campaignName || '-'}</span>,
    },
    {
      title: 'Campaign Term',
      dataIndex: 'campaignTerm',
      key: 'campaignTerm',
      width: 140,
      className: 'font-light',
      ellipsis: true,
      editable: true,
      render: (i: any, record: DataType) => <span>{record.campaignTerm || '-'}</span>,
    },
    {
      title: 'Campaign Content',
      dataIndex: 'campaignContent',
      key: 'campaignContent',
      width: 160,
      className: 'font-light',
      ellipsis: true,
      editable: true,
      render: (i: any, record: DataType) => <span>{record.campaignContent || '-'}</span>,
    },
    {
      title: 'UTM',
      dataIndex: 'utm',
      key: 'utm',
      width: 140,
      className: 'truncate font-light',
      ellipsis: true,
      editable: true,
      render: (i: any, record: DataType) => {
        return (
          <Tooltip
            placement='topLeft'
            title={record.utm}
            color='white'
            overlayInnerStyle={{ color: '#2D2D31', fontSize: 14 }}
          >
            {record.utm}
          </Tooltip>
        );
      },
    },
    {
      title: 'Heading',
      dataIndex: 'heading',
      key: 'heading',
      width: 180,
      className: 'font-light',
      ellipsis: true,
      editable: true,
      render: (i: any, record: DataType) => <span>{record.heading || '-'}</span>,
    },
    {
      title: 'Creative',
      dataIndex: 'creative',
      key: 'creative',
      width: 140,
      className: 'font-light',
      ellipsis: true,
      editable: true,
      render: (i: any, record: DataType) => <span>{record.creative || '-'}</span>,
    },
    {
      title: 'Cost Per Click / land',
      dataIndex: 'costPerClick',
      key: 'costPerClick',
      width: 180,
      className: 'font-light',
      inputType: 'number',
      ellipsis: true,
      editable: true,
    },
    {
      title: '',
      key: 'action',
      className: 'text-center bg-[#f9f9fc]',
      width: 130,
      fixed: 'right',
      render: (i: any, record: DataType) => {
        const editable = isEditing(record);

        return editable && !isAdding ? (
          <Space>
            <Button size='small' className='button' onClick={() => handleSave(record.key)}>
              Save
            </Button>
            <Button size='small' className='button' onClick={handleCancel}>
              Cancel
            </Button>
          </Space>
        ) : (
          <Space>
            <Button
              size='small'
              disabled={isAdding || editingKey !== ''}
              className='button'
              onClick={() => handleEdit(record)}
            >
              Edit
            </Button>

            <Popconfirm
              title='Delete the Source/Landing Map'
              description='Are you sure to delete this item?'
              onConfirm={() => handleDelete(record.key)}
              overlayInnerStyle={{ fontSize: 13 }}
              icon={null}
              cancelButtonProps={{ className: 'text-xs mt-2 w-[60px]' }}
              okButtonProps={{ className: 'text-xs mt-2 w-[60px]' }}
            >
              <Button size='small' disabled={isAdding || editingKey !== ''} className='button'>
                Delete
              </Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record: DataType) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Card bodyStyle={{ padding: 48, paddingBottom: 24 }}>
      <Flex align='center' justify='space-between' className='mb-8 w-full px-4'>
        <Title level={2} className='mb-0'>
          Source / Landing Map
        </Title>
      </Flex>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          rowClassName={() => 'editable-row bg-[#f9f9fc]'}
          columns={mergedColumns as ColumnsType<DataType>}
          dataSource={getData(current, PAGE_SIZE)}
          footer={() => (
            <Row align='middle' justify='space-between' className='mt-4'>
              {!isAdding ? (
                <Button disabled={editingKey !== ''} onClick={handleAdd}>
                  + Add another source
                </Button>
              ) : (
                <Flex gap={8}>
                  <Button className='w-[140px] border-none bg-black text-white'>Save</Button>
                  <Button disabled={editingKey !== ''} onClick={handleCancelAdd} className='w-[140px]'>
                    Cancel
                  </Button>
                </Flex>
              )}
              <Pagination current={current} total={data.length} pageSize={PAGE_SIZE} onChange={onChange} />
            </Row>
          )}
          pagination={false}
          scroll={{ x: 1240 }}
        />
      </Form>
    </Card>
  );
};
