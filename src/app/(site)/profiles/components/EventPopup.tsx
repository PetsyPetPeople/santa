'use client';
import { Divider, Flex, Typography } from 'antd';
import clsx from 'clsx';
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
      className={clsx('popup active absolute z-30 p-4', className)}
      style={{
        top: position.top,
        left: position.left,
      }}
    >
      <Text className='mb-1 text-[20px] text-[#ffffff]'>$1.000.000</Text>
      <Text className='text-[#9494A3]'>Touch 1</Text>
      <Divider className='my-3 border-[#ffffff]' />

      <Flex vertical>
        <Text className='text-[14px] text-[#9797AC]'>Source:</Text>
        <Text className='text-[14px] text-[#ffffff]'>Facebook Ads</Text>
        <Text className='text-[14px] text-[#ffffff]'>Campaign 1</Text>

        <Divider className='my-2 border-[#E5E5EF]' />
        <Text className='text-[14px] text-[#9797AC]'>Time Decay:</Text>
        <Text className='text-[14px] text-[#ffffff]'>10 days</Text>

        <Divider className='my-2 border-[#E5E5EF]' />
        <Text className='text-[14px] text-[#9797AC]'>Events:</Text>
        <Text className='text-[14px] text-[#ffffff]'>Site visit: 10 sec</Text>
        <Text className='text-[14px] text-[#ffffff]'>Scroll Depth: 30%</Text>
        <Text className='text-[14px] text-[#ffffff]'>Page Views: 1</Text>

        <Divider className='my-2 border-[#E5E5EF]' />
        <Text className='text-[14px] text-[#9797AC]'>Journey Status:</Text>
        <Text className='text-[14px] text-[#ffffff]'>Soft Leads</Text>
      </Flex>
    </Flex>
  );
});

EventPopup.displayName = 'EventPopup';
