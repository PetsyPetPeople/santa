/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, Typography } from 'antd';
import { Fragment } from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const { Title, Text } = Typography;

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className='custom-tooltip-chart popup active'>
        <p className='value'>${payload[0].value}</p>
        <p className='label'>{label}</p>
      </div>
    );
  }

  return null;
};

interface BarChartCardProps {
  data: {
    label: string;
    value: number;
  }[];
}

export function BarChartCard({ data }: BarChartCardProps) {
  return (
    <Fragment>
      <Flex align='center' justify='space-between' className='mb-4 px-2'>
        <Title level={3} className='mb-0'>
          Cold Lead
        </Title>
        <Flex align='end' className='ml-2'>
          <Text className='mb-[3px] mr-1 text-xs'>Total Average Cost</Text>
          <Title level={3} className='m-0'>
            $110
          </Title>
        </Flex>
      </Flex>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          data={data}
          layout='vertical'
          margin={{
            top: 5,
            right: 10,
            left: -10,
            bottom: 15,
          }}
        >
          <XAxis
            type='number'
            angle={90}
            textAnchor='start'
            stroke='#000'
            fontSize={12}
            tickFormatter={(value) => (value === 0 ? '' : `$${value}`)}
            dy={5}
            dx={5}
            axisLine={{
              stroke: '#78909C',
            }}
            tickLine={{
              stroke: '#78909C',
            }}
          />
          <YAxis
            type='category'
            dataKey='label'
            axisLine={false}
            stroke='#000'
            fontSize={12}
            width={100}
            dx={-10}
            tickLine={false}
          />
          <Tooltip content={CustomTooltip} />
          <Bar dataKey='value' fill='#F05858' barSize={18} background isAnimationActive={false} />
        </BarChart>
      </ResponsiveContainer>
    </Fragment>
  );
}
