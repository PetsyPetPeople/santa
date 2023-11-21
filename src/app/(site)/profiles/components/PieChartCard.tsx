'use client';

import { Badge, Col, Flex, Row } from 'antd';
import clsx from 'clsx';
import { Cell, Pie, PieChart } from 'recharts';

interface PieChartCardProps {
  data: {
    name: string;
    color: string;
    value: number;
  }[];
  dotSize?: 'small' | 'medium';
}

export const PieChartCard = ({ data, dotSize = 'medium' }: PieChartCardProps) => {
  return (
    <Row align='middle'>
      <Col xs={24} xl={10} className='flex justify-center xl:block'>
        <PieChart id='source' width={250} height={250}>
          <Pie data={data} stroke='none' innerRadius={50} fill='#8884d8' dataKey='value' startAngle={90} endAngle={540}>
            {data.map((item, index) => (
              <Cell key={`cell-${index}`} fill={item.color} />
            ))}
          </Pie>
        </PieChart>
      </Col>
      <Col xs={24} xl={14}>
        <div className='mt-8'>
          {data.map((e, i) => (
            <Flex align='center' justify='space-between' key={i} className='my-1'>
              <Badge
                color={e.color}
                size='small'
                text={<span title={e.name}>{e.name}</span>}
                classNames={{
                  root: 'flex flex-auto items-center pr-2',
                  indicator: clsx('shrink-0', dotSize === 'small' && 'w-3 h-3'),
                }}
              />
              <span className='shrink-0'>{e.value}%</span>
            </Flex>
          ))}
        </div>
      </Col>
    </Row>
  );
};
