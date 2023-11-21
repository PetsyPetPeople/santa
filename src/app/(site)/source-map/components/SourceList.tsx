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
  Select,
  Space,
  Table,
  Tooltip,
  Typography,
} from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { Fragment, useState } from 'react';

const { Title } = Typography;

type Options = { icon: IconName; value: string; label: string };

export const DEFAULT_OPTIONS: Options[] = [
  {
    icon: 'logo-affiliate-referrals',
    value: 'Affiliate Referrals',
    label: 'Affiliate Referrals',
  },
  { icon: 'logo-apple', value: 'App Store (Ads)', label: 'App Store (Ads)' },
  { icon: 'logo-apple', value: 'App Store (Organic)', label: 'App Store (Organic)' },
  { icon: 'logo-baidu', value: 'Baidu', label: 'Baidu' },
  { icon: 'logo-bing', value: 'Bing (Ads)', label: 'Bing (Ads)' },
  { icon: 'logo-bing', value: 'Bing (Organic)', label: 'Bing (Organic)' },
  { icon: 'logo-canstar', value: 'Canstar', label: 'Canstar' },
  { icon: 'logo-canstar', value: 'Canstar (Paid)', label: 'Canstar (Paid)' },
  { icon: 'logo-cashback-rewards', value: 'Cashback Rewards', label: 'Cashback Rewards' },
  { icon: 'logo-cat', value: 'Cats Of Australia', label: 'Cats Of Australia' },
  { icon: 'logo-choice', value: 'Choice', label: 'Choice' },
  { icon: 'logo-commission-factory', value: 'Commission Factory', label: 'Commission Factory' },
  { icon: 'logo-compare-market', value: 'Compare the Market', label: 'Compare the Market' },
  { icon: 'logo-credit-savvy', value: 'Credit Savvy', label: 'Credit Savvy' },
  { icon: 'logo-deal-spotr', value: 'Deal Spotr', label: 'Deal Spotr' },
  {
    icon: 'logo-deutsch-welpenplatz',
    value: 'Deutsch Welpenplatz',
    label: 'Deutsch Welpenplatz',
  },
  { icon: 'logo-direct-traffic', value: 'Direct Traffic', label: 'Direct Traffic' },
  { icon: 'logo-display-ads', value: 'Display Ads', label: 'Display Ads' },
  { icon: 'logo-duck', value: 'DuckDuckGo', label: 'DuckDuckGo' },
  { icon: 'logo-email', value: 'Email Campaigns', label: 'Email Campaigns' },
  { icon: 'logo-facebook', value: 'Facebook (Ads)', label: 'Facebook (Ads)' },
  { icon: 'logo-facebook', value: 'Facebook (Organic)', label: 'Facebook (Organic)' },
  { icon: 'logo-finder', value: 'Finder', label: 'Finder' },
  {
    icon: 'logo-message',
    value: 'Forums and Community Boards',
    label: 'Forums and Community Boards',
  },
  { icon: 'logo-google', value: 'Google (Ads)', label: 'Google (Ads)' },
  { icon: 'logo-google', value: 'Google (Organic)', label: 'Google (Organic)' },
  { icon: 'logo-growthops', value: 'GrowthOps', label: 'GrowthOps' },
  {
    icon: 'logo-influencer-marketing',
    value: 'Influencer Marketing',
    label: 'Influencer Marketing',
  },
  { icon: 'logo-instagram', value: 'Instagram', label: 'Instagram' },
  { icon: 'logo-klaviyo', value: 'Klaviyo', label: 'Klaviyo' },
  { icon: 'logo-linkedIn', value: 'LinkedIn (Ads)', label: 'LinkedIn (Ads)' },
  { icon: 'logo-linkedIn', value: 'LinkedIn (Organic)', label: 'LinkedIn (Organic)' },
  { icon: 'logo-mailchimp', value: 'Mailchimp', label: 'Mailchimp' },
  { icon: 'logo-mozo', value: 'Mozo', label: 'Mozo' },
  { icon: 'logo-pinterest', value: 'Pinterest', label: 'Pinterest' },
  { icon: 'logo-podcasts', value: 'Podcasts', label: 'Podcasts' },
  { icon: 'logo-product-review', value: 'Product Review', label: 'Product Review' },
  { icon: 'logo-qrcode', value: 'QR Codes - Breeders', label: 'QR Codes - Breeders' },
  { icon: 'logo-qrcode', value: 'QR Codes - Vets', label: 'QR Codes - Vets' },
  { icon: 'logo-reddit', value: 'Reddit', label: 'Reddit' },
  { icon: 'logo-rss', value: 'RSS Feeds', label: 'RSS Feeds' },
  { icon: 'logo-savvy', value: 'Savvy', label: 'Savvy' },
  { icon: 'logo-snapchat', value: 'Snapchat', label: 'Snapchat' },
  { icon: 'logo-sms', value: 'SMS Marketing', label: 'SMS Marketing' },
  { icon: 'logo-tiktok', value: 'TikTok', label: 'TikTok' },
  { icon: 'logo-pet', value: 'Top10 Pet Insurance', label: 'Top10 Pet Insurance' },
  { icon: 'logo-trustpilot', value: 'Trustpilot', label: 'Trustpilot' },
  { icon: 'logo-x', value: 'X (Ads)', label: 'X (Ads)' },
  { icon: 'logo-x', value: 'X (Organic)', label: 'X (Organic)' },
  { icon: 'logo-webinars', value: 'Webinars', label: 'Webinars' },
  { icon: 'logo-yahoo', value: 'Yahoo', label: 'Yahoo' },
  { icon: 'logo-youtube', value: 'YouTube', label: 'YouTube' },
];

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
    platform: 'Facebook (Ads)',
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
  inputType: 'number' | 'text' | 'select';
  record: DataType;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({ editing, dataIndex, inputType, children, ...restProps }) => {
  let inputNode;

  switch (inputType) {
    case 'select':
      inputNode = (
        <Select placeholder='Select Source' style={{ width: 200 }} popupClassName='w-[260px]'>
          {DEFAULT_OPTIONS.map((item: Options) => (
            <Select.Option value={item.value} key={item.value} title={item.value}>
              <Icon name={item.icon} className='mr-2' size='sm' />
              <span>{item.label}</span>
            </Select.Option>
          ))}
        </Select>
      );
      break;
    case 'number':
      inputNode = <InputNumber />;
      break;
    default:
      inputNode = <Input />;
      break;
  }

  return (
    <td {...restProps}>
      {editing ? (
        <Fragment>
          {dataIndex === 'platform' ? (
            <Form.Item
              name={dataIndex}
              style={{ margin: 0 }}
              rules={[
                {
                  required: true,
                  message: `Please select source`,
                },
              ]}
            >
              {inputNode}
            </Form.Item>
          ) : (
            <Form.Item name={dataIndex} style={{ margin: 0 }}>
              {inputNode}
            </Form.Item>
          )}
        </Fragment>
      ) : (
        children
      )}
    </td>
  );
};

export const SourceList = () => {
  const { message } = useApp();
  const [current, setCurrent] = useState(PAGE_CURRENT);
  const [dataSource, setDataSource] = useState<DataType[]>(data);
  const [addedId, setAddedId] = useState<string | null>(null);

  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');

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
      console.log('row :>> ', row);

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
      console.log('errInfo :>> ', errInfo);
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
      width: 240,
      ellipsis: true,
      editable: true,
      render: (i: any, record: DataType) => {
        const iconName = DEFAULT_OPTIONS.find((item) => item.value === record.platform)?.icon;
        return (
          <Flex align='center'>
            {!!iconName && <Icon name={iconName} className='mr-3 h-[28px] w-[28px]' />}
            <span>{record.platform || ''}</span>
          </Flex>
        );
      },
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
        inputType: col.dataIndex === 'costPerClick' ? 'number' : col.dataIndex === 'platform' ? 'select' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Card bodyStyle={{ borderRadius: 20 }} className='rounded-[20px] p-6 lg:px-[60px] lg:py-4'>
      <Flex align='center' justify='space-between' className='w-full'>
        <Title level={3} className='mb-0 font-normal'>
          Source Map
        </Title>
      </Flex>
      <Divider className='mt-4 bg-[#E5E5EF]' />
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
              <Pagination current={current} total={dataSource.length} pageSize={PAGE_SIZE} onChange={onChange} />
            </Row>
          )}
          pagination={false}
          scroll={{ x: 1240 }}
        />
      </Form>
    </Card>
  );
};
