'use client';

import { Card } from '@/components';
import { Badge, Flex } from 'antd';
import Text from 'antd/es/typography/Text';
import { Cell, Pie, PieChart } from 'recharts';

const data = [
  { name: 'Email', value: 10 },
  { name: 'Canstar', value: 20 },
  { name: 'Facebook', value: 30 },
  { name: 'Tik Tok', value: 15 },
  { name: 'Ads', value: 50 },
  { name: 'Google', value: 8 },
  { name: 'Instagram', value: 8 },
];
const COLORS = ['#88889C', '#505053', '#FFDBDB', '#FFB4B4', '#FD8B8B', '#F05858'];

export const PieChartCard = () => {
  return (
    <Card bodyStyle={{ padding: 0 }}>
      <Flex>
        <PieChart id='source' width={250} height={250}>
          <Pie data={data} stroke='none' innerRadius={50} fill='#8884d8' dataKey='value'>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>

        <Flex vertical className='ml-8 mt-8 w-[270px]'>
          <Text className='mb-6 text-[22px]'>Source Attribution</Text>
          <Flex wrap='wrap'>
            {data.map((item, index) => (
              <Badge
                key={index}
                color={COLORS[index % COLORS.length]}
                text={<span className='ml-1 font-light text-[#9494A3]'>{item.name}</span>}
                className='my-1 w-1/2'
              />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};
