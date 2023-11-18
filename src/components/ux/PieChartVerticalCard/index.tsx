'use client';

import { Badge, Flex, Typography } from 'antd';
import { Cell, Pie, PieChart } from 'recharts';

const { Title, Text } = Typography;

interface PieChartVerticalItem {
  title: string;
  value: string | number;
  color: string;
}

interface PieChartVerticalCardProps {
  id: string;
  title?: string;
  data: PieChartVerticalItem[];
}

export function PieChartVerticalCard({ id, title, data }: PieChartVerticalCardProps) {
  return (
    <Flex vertical align='center' className='h-full w-full'>
      <PieChart id={`pie-${id}`} width={250} height={250}>
        <Pie data={data} stroke='none' innerRadius={50} fill='#8884d8' dataKey='value'>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>

      <Title level={3} className='mb-6 text-[22px]'>
        {title}
      </Title>
      <Flex vertical className='w-full px-6'>
        {data?.map((item, index) => (
          <Flex key={index} align='center' justify='space-between' className='my-1'>
            <Badge
              key={index}
              color={item.color}
              text={<span title={item.title}>{item.title}</span>}
              classNames={{
                root: 'flex flex-auto items-center pr-2',
                indicator: 'shrink-0 mr-2',
              }}
            />
            <Text>{item.value}%</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
