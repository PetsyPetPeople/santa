'use client';

import { Icon, IconName } from '@/components';
import { Flex, Typography } from 'antd';
import clsx from 'clsx';
import { isNull } from 'lodash';
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

  const classNameActive = (isBgColor = false) => {
    return !isNull(item.count)
      ? `${isBgColor ? 'bg-[#EE4D52]' : 'text-[#EE4D52]'}`
      : `${isBgColor ? 'bg-[#9494A3]' : 'text-[#9494A3]'}`;
  };

  return (
    <div className='flex-auto pb-5 pt-3'>
      <Flex vertical align='center' className='relative h-full'>
        <span className={clsx('absolute top-[34px] z-10 h-[6px] w-[calc(100%-2px)]', classNameActive(true))} />
        <Icon name={item.id as IconName} size='lg' className='relative z-20' />

        <Flex
          id={`event-${index}`}
          ref={currentRef}
          vertical
          align='center'
          className='popup w-[75px] flex-auto p-[20px_6px_16px_6px]'
        >
          <Text className={clsx('mb-1 text-xl', classNameActive())}>{`$${item.value || '?'}`}</Text>
          <Text className='mb-1 text-[#9494A3]'>{item.count ? `Touch ${item.count}` : '...'}</Text>

          {!!item.count && (
            <div
              ref={buttonRef}
              className='flex h-4 w-1/2 cursor-pointer items-end justify-center'
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
