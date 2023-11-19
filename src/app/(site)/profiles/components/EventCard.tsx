'use client';

import { Card, Heading, Icon } from '@/components';
import { useClickAway, useDebounceEffect } from 'ahooks';
import { Flex } from 'antd';
import { isNull } from 'lodash';
import { useRef, useState } from 'react';
import { EventCardItemRef, EventItem } from '../types';
import { EventCardItem } from './EventCardItem';
import { EventPopup } from './EventPopup';

const data: EventItem[] = [
  { id: 'instagram', count: 1, value: 100, status: 'hot' },
  { id: 'google', count: 2, value: 200, status: 'hot' },
  { id: 'tiktok', count: 2, value: 200, status: 'hot' },
  { id: 'facebook', count: 2, value: 200, status: 'hot' },
  { id: 'canstar', count: 2, value: 200, status: 'hot' },
  { id: 'youtube', count: 2, value: 200, status: 'hot' },
  { id: 'credit-savvy', count: 2, value: 200, status: 'hot' },
  { id: 'linked', count: 2, value: 200, status: 'cold' },
  { id: 'market', count: 2, value: 200, status: 'cold' },
  { id: 'mozo', count: 2, value: 200, status: 'cold' },
  { id: 'pet-insurance', count: 2, value: 200, status: 'cold' },
  { id: 'pinterest', count: 2, value: 200, status: 'cold' },
  { id: 'product-review', count: 2, value: 200, status: 'cold' },
  { id: 'savvy', count: 2, value: 200, status: 'cold' },

  { id: 'unknown', count: null, value: null, status: null },
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
      const top = Math.ceil(position?.top) - 248 + window.scrollY;
      const left = Math.ceil(position?.left) - 115;

      setPosition({ top, left });
    }
  };

  const handleWheel = (e: any) => {
    const el = e.currentTarget;

    if (e.deltaY == 0) return;

    e.cancelable && e.preventDefault();
    el.scrollTo({
      left: el.scrollLeft + e.deltaY * 20,
      behavior: 'smooth',
      passive: false,
    });
  };

  return (
    <Card className='relative mb-5 mt-10' bodyStyle={{ padding: '30px 30px 50px' }}>
      <Heading text='Lead Journey' level={3} rootClassName='mb-[60px]' />
      <Flex
        className='scrollbar-hide relative overflow-y-auto'
        align='flex-start'
        justify='space-between'
        onWheel={handleWheel}
      >
        <div className='w-[64px] shrink-0'>
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
        <div className='w-[64px] shrink-0'>
          <Icon name={iSuccess ? 'win' : 'lose'} width={62} height={62} className='py-4' />
        </div>
      </Flex>

      {!isNull(popupId) && <EventPopup ref={popupRef} position={position} className={popupClassName} />}
    </Card>
  );
};
