'use client';

import { Badge, Col, Flex, Row } from 'antd';
import { flatMap } from 'lodash';
import { Cell, Pie, PieChart } from 'recharts';

const MOCK_DATA = {
  COL1: [
    { name: 'Savvy', value: 20, color: '#EE4D52' },
    { name: 'CanCompare The Market', value: 15, color: '#F17175' },
    { name: 'Credit Savvy', value: 10, color: '#F59497' },
    { name: 'Tik Tok', value: 9, color: '#F8B8BA' },
    { name: 'Google', value: 8, color: '#FCDBDC' },
    { name: 'Mozo', value: 7, color: '#FDEDEE' },
  ],
  COL2: [
    { name: 'Finder', value: 6, color: '#353538' },
    { name: 'Product Review', value: 5, color: '#5D5D60' },
    { name: 'Pinterest', value: 4, color: '#868688' },
    { name: 'YouTube', value: 3, color: '#AEAEAF' },
    { name: 'Top 10 Pet Insurance', value: 2, color: '#D7D7D7' },
    { name: 'Other', value: 1, color: '#EBEBEB' },
  ],
};

export const PieChartCard = () => {
  const data = flatMap(Object.values(MOCK_DATA));

  return (
    <Row>
      <Col xs={24} xl={8} className='flex justify-center xl:block'>
        <PieChart id='source' width={250} height={250}>
          <Pie data={data} stroke='none' innerRadius={50} fill='#8884d8' dataKey='value'>
            {data.map((item, index) => (
              <Cell key={`cell-${index}`} fill={item.color} />
            ))}
          </Pie>
        </PieChart>
      </Col>
      <Col xs={24} xl={16}>
        <Row gutter={[24, 24]} className='mt-4 flex-auto xl:ml-4 xl:mt-8'>
          {Object.values(MOCK_DATA).map((item, index) => (
            <Col xs={12} key={index} className='flex flex-col'>
              {item.map((e, i) => (
                <Flex align='center' justify='space-between' key={i} className='my-1'>
                  <Badge
                    color={e.color}
                    text={<span title={e.name}>{e.name}</span>}
                    classNames={{
                      root: 'flex flex-auto items-center pr-2',
                      indicator: 'shrink-0',
                    }}
                  />
                  <span className='shrink-0'>{e.value}%</span>
                </Flex>
              ))}
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};
