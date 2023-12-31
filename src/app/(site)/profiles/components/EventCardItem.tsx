'use client';

import { Icon, IconName } from '@/components';
import { Flex, Typography } from 'antd';
import clsx from 'clsx';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { EventCardItemRef, EventItem } from '../types';

const { Text } = Typography;

interface EventCardItemProps {
  index: number;
  item: EventItem;
  onClick: (index: number) => void;
}

export const EventCardItem = forwardRef<EventCardItemRef, EventCardItemProps>(({ index, item, onClick }, ref) => {
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const currentRef = useRef<HTMLElement | null>(null);

  useImperativeHandle(ref, () => ({
    buttonRef: buttonRef.current,
    currentRef: currentRef.current,
  }));

  const classNameActive = () => {
    switch (item.status) {
      case 'hot':
        return 'bg-[#F8595E]';
      case 'cold':
        return 'bg-[#56A9F5]';
      default:
        return 'bg-[#CDCBDB]';
    }
  };

  return (
    <div className='flex-auto pb-5 pt-3'>
      <Flex vertical align='center' className='relative h-full'>
        <span className={clsx('absolute top-[34px] z-10 h-[6px] w-[calc(100%-2px)]', classNameActive())} />
        <Icon name={item.id as IconName} size='lg' className='relative z-20' />
        <Flex
          id={`event-${index}`}
          ref={currentRef}
          vertical
          align='center'
          className={clsx('mt-2 min-w-[76px] flex-auto px-2 py-2 sm:min-w-[64px]', item.id && 'popup')}
        >
          {item.value ? <Text className={clsx('mb-0 text-xl font-normal')}>${item.value}</Text> : <div />}
          {!!item.count && <Text className='text-[13px] text-[#9494A3]'>Touch {item.count}</Text>}

          {!!item.count && (
            <div
              ref={buttonRef}
              className='flex h-3 w-1/2 cursor-pointer items-end justify-center'
              onClick={() => onClick(index)}
            >
              <Icon name='arrow-down' width={12} height={8} />
            </div>
          )}
        </Flex>
      </Flex>
    </div>
  );
});

EventCardItem.displayName = 'EventCardItem';
