/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Card, Icon, IconName } from '@/components';
import { PAGE_CURRENT, PAGE_SIZE } from '@/constants';
import { useApp } from '@/hooks';
import {
  Button,
  Divider,
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
  icon: IconName | null;
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
    icon: 'logo-canstar',
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
    icon: 'logo-facebook',
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
    icon: 'logo-instagram',
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
    icon: 'logo-finder',
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
  const { notification, message } = useApp();
  const [current, setCurrent] = useState(PAGE_CURRENT);
  const [dataSource, setDataSource] = useState<DataType[]>(data);
  const [addedId, setAddedId] = useState<string | null>(null);

  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');
  console.log('editingKey :>> ', editingKey);
  const isEditing = (record: DataType) => record.key === editingKey;

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
    setAddedId(null);
    setEditingKey('');
    form.resetFields();
  };

  const handleAdd = () => {
    const newId = new Date().getTime().toString();
    const newData: DataType = {
      key: newId,
      icon: null,
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

    setEditingKey(newId);
    setDataSource([...dataSource, newData]);
    setAddedId(newId);
  };

  const handleDelete = (key: React.Key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);

    message.success('Deleted successfully!');
  };

  const handleSave = async (isEdit = true, key?: React.Key) => {
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
      } else {
        newData.push(row);
        setDataSource(newData);
      }

      message.success(`${isEdit ? 'Updated' : 'Added'} successfully!`);
      form.resetFields();
      setEditingKey('');
      setAddedId(null);
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
      width: 160,
      ellipsis: true,
      editable: true,
      render: (i: any, record: DataType) => (
        <Flex align='center'>
          <Icon name={record.icon} className='mr-3 h-[28px] w-[28px]' />
          <span>{record.platform || ''}</span>
        </Flex>
      ),
    },

    {
      title: 'Campaign Objective',
      dataIndex: 'campaignObjective',
      key: 'campaignObjective',
      width: 170,
      ellipsis: true,
      editable: true,
    },
    {
      title: 'Funnel Target',
      dataIndex: 'funnelTarget',
      key: 'funnelTarget',
      width: 140,
      ellipsis: true,
      editable: true,
    },
    {
      title: 'Source',
      dataIndex: 'source',
      key: 'source',
      width: 140,
      ellipsis: true,
      editable: true,
      render: (i: any, record: DataType) => <span>{record.source || '-'}</span>,
    },
    {
      title: 'Medium',
      dataIndex: 'medium',
      key: 'medium',
      width: 140,
      ellipsis: true,
      editable: true,
      render: (i: any, record: DataType) => <span>{record.medium || '-'}</span>,
    },
    {
      title: 'Campaign Name',
      dataIndex: 'campaignName',
      key: 'campaignName',
      width: 160,
      ellipsis: true,
      editable: true,
      render: (i: any, record: DataType) => <span>{record.campaignName || '-'}</span>,
    },
    {
      title: 'Campaign Term',
      dataIndex: 'campaignTerm',
      key: 'campaignTerm',
      width: 140,
      ellipsis: true,
      editable: true,
      render: (i: any, record: DataType) => <span>{record.campaignTerm || '-'}</span>,
    },
    {
      title: 'Campaign Content',
      dataIndex: 'campaignContent',
      key: 'campaignContent',
      width: 160,
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
            overlayInnerStyle={{ color: '#353538', fontSize: 14 }}
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
      ellipsis: true,
      editable: true,
      render: (i: any, record: DataType) => <span>{record.heading || '-'}</span>,
    },
    {
      title: 'Creative',
      dataIndex: 'creative',
      key: 'creative',
      width: 140,
      ellipsis: true,
      editable: true,
      render: (i: any, record: DataType) => <span>{record.creative || '-'}</span>,
    },
    {
      title: 'Cost Per Click / land',
      dataIndex: 'costPerClick',
      key: 'costPerClick',
      width: 180,
      inputType: 'number',
      ellipsis: true,
      editable: true,
    },
    {
      title: '',
      key: 'action',
      className: 'text-center',
      width: 170,
      fixed: 'right',
      render: (i: any, record: DataType) => {
        const editable = isEditing(record);

        return editable && !addedId ? (
          <Space>
            <Button type='link' className='button' onClick={() => handleSave(true, record.key)}>
              Save
            </Button>
            <Button type='link' className='button' onClick={handleCancel}>
              Cancel
            </Button>
          </Space>
        ) : (
          <Space>
            <Button
              type='link'
              className='button'
              disabled={!!addedId || editingKey !== ''}
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
              <Button type='link' className='button' disabled={!!addedId || editingKey !== ''}>
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
    <Card bodyStyle={{ borderRadius: 20 }} className='rounded-[20px] p-6 lg:px-[60px] lg:py-4'>
      <Flex align='center' justify='space-between' className='w-full'>
        <Title level={3} className='mb-0'>
          Source Map
        </Title>
      </Flex>
      <Divider className='mt-4' />
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          rowClassName={() => 'editable-row'}
          columns={mergedColumns as ColumnsType<DataType>}
          dataSource={getData(current, PAGE_SIZE)}
          footer={() => (
            <Row align='middle' justify='space-between' className='mt-4'>
              {!addedId ? (
                <Button type='link' className='button' disabled={editingKey !== ''} onClick={handleAdd}>
                  + Add another source
                </Button>
              ) : (
                <Flex gap={8}>
                  <Button type='link' className='button black w-[140px]' onClick={() => handleSave(false, editingKey)}>
                    Save
                  </Button>
                  <Button type='link' onClick={handleCancelAdd} className='button w-[140px]'>
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
