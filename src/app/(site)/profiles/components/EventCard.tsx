'use client';
import { Card, Icon } from '@/components';
import { useClickAway, useDebounceEffect } from 'ahooks';
import { Flex } from 'antd';
import { isNull } from 'lodash';
import { useRef, useState } from 'react';
import { EventCardItemRef, EventItem } from '../types';
import { EventCardItem } from './EventCardItem';
import { EventPopup } from './EventPopup';

const data: EventItem[] = [
  { id: 'instagram', count: 1, value: 100 },
  { id: 'google', count: 2, value: 200 },
  { id: 'tiktok', count: 2, value: 200 },
  { id: 'facebook', count: 2, value: 200 },
  { id: 'canstar', count: 2, value: 200 },
  { id: 'mail', count: 2, value: 200 },

  { id: 'instagram', count: 1, value: 100 },
  { id: 'google', count: 2, value: 200 },
  { id: 'tiktok', count: 2, value: 200 },
  { id: 'facebook', count: 2, value: 200 },
  { id: 'canstar', count: 2, value: 200 },
  { id: 'mail', count: 2, value: 200 },

  { id: 'unknown', count: null, value: null },
];

export const EventCard = () => {
  const [popupId, setPopupId] = useState<number | null>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [popupClassName, setPopupClassName] = useState('');

  const popupRef = useRef(null);
  const eventItemRef = useRef<EventCardItemRef[] | null[]>([]);

  const iSuccess = data.every((item) => !isNull(item.count));

  useClickAway(() => setPopupId(null), [popupRef, eventItemRef?.current[popupId!]?.buttonRef]);
  useDebounceEffect(() => setPopupClassName(''), [popupId], { wait: 500 });

  const handleOpen = (id: number) => {
    setPopupId(id);
    setPopupClassName('open');

    const position = eventItemRef.current[id]!.currentRef?.getBoundingClientRect();

    if (position) {
      const top = Math.ceil(position?.top) - 234 + window.scrollY;
      const left = Math.ceil(position?.left) - 132;

      setPosition({ top, left });
    }
  };

  return (
    <Card className='relative mb-5 mt-10' bodyStyle={{ padding: '50px 30px' }}>
      <Flex className='relative' align='flex-start' justify='space-between'>
        <div className='w-[64px]'>
          <Icon name='hat' width={62} height={62} className='py-4' />
        </div>
        <Flex className='flex-auto'>
          {data.map((item, index) => (
            <EventCardItem
              key={index}
              index={index}
              item={item}
              onClick={handleOpen}
              ref={(e) => (eventItemRef.current[index] = e)}
            />
          ))}
        </Flex>
        <div className='w-[64px]'>
          <Icon name={iSuccess ? 'win' : 'lose'} width={62} height={62} className='py-4' />
        </div>
      </Flex>

      {!isNull(popupId) && <EventPopup ref={popupRef} position={position} className={popupClassName} />}
    </Card>
  );
};
