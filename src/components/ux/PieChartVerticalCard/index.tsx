'use client';

import { Badge, Flex, Typography } from 'antd';
import { Cell, Pie, PieChart } from 'recharts';

const { Title } = Typography;

interface PieChartVerticalItem {
  title: string;
  value: string | number;
  color: string;
}

interface PieChartVerticalCardProps {
  id: string;
  title?: string;
  data: PieChartVerticalItem[];
  dataColors: {
    [key: string]: PieChartVerticalItem[];
  };
}

export function PieChartVerticalCard({ id, title, data, dataColors }: PieChartVerticalCardProps) {
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
      <Flex wrap='wrap' className='w-full'>
        {Object.values(dataColors)?.map((item, index) => (
          <Flex key={index} vertical wrap='wrap' className='w-1/3'>
            {item.map((e, i) => (
              <Badge
                key={i}
                color={e.color}
                className='my-1'
                text={<span className='ml-1 text-[#9494A3]'>{e.title}</span>}
              />
            ))}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
