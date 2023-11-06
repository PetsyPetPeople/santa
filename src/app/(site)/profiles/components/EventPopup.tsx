'use client';
import { Divider, Flex, Typography } from 'antd';
import clsx from 'clsx';
import Image from 'next/image';
import { Ref, forwardRef } from 'react';

const { Text } = Typography;

interface EventPopupProps {
  className: string;
  position: {
    top: number;
    left: number;
  };
}

export const EventPopup = forwardRef(({ className, position }: EventPopupProps, ref: Ref<HTMLDivElement> | null) => {
  return (
    <Flex
      ref={ref}
      vertical
      align='center'
      className={clsx('popup active absolute z-30 w-[168px] p-[24px]', className)}
      style={{
        top: position.top,
        left: position.left,
      }}
    >
      <Text className='mb-1 text-[20px] text-[#F05858]'>$1.000.000</Text>
      <Text className='mb-2 text-[#9494A3]'>Touch 1</Text>
      <Image src='/icons/arrow-down.svg' alt='event' width={9} height={6} />

      <Flex vertical>
        <Text className='text-[14px]'>Source:</Text>
        <Text className='text-[14px] text-[#9494A3]'>Facebook Ads</Text>
        <Text className='text-[14px] text-[#9494A3]'>Campaign 1</Text>

        <Divider className='my-2 border-[#9494A3]' />
        <Text className='text-[14px]'>Time Decay:</Text>
        <Text className='text-[14px] text-[#9494A3]'>10 days</Text>

        <Divider className='my-2 border-[#9494A3]' />
        <Text className='text-[14px]'>Events:</Text>
        <Text className='text-[14px] text-[#9494A3]'>Site visit: 10 sec</Text>
        <Text className='text-[14px] text-[#9494A3]'>Scroll Depth: 30%</Text>
        <Text className='text-[14px] text-[#9494A3]'>Page Views: 1</Text>

        <Divider className='my-2 border-[#9494A3]' />
        <Text className='text-[14px]'>Journey Status:</Text>
        <Text className='text-[14px] text-[#9494A3]'>Soft Leads</Text>
      </Flex>
    </Flex>
  );
});

EventPopup.displayName = 'EventPopup';
