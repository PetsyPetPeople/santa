'use client';
import { Card, Icon, IconName } from '@/components';
import { useClickAway } from 'ahooks';
import { Divider, Flex, Typography } from 'antd';
import clsx from 'clsx';
import { isNull } from 'lodash';
import Image from 'next/image';
import { useRef, useState } from 'react';

const { Text } = Typography;

const data = [
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
  const [openId, setOpenId] = useState<number | null>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const refPPopover = useRef(null);
  const refTarget = useRef<any[]>([]);

  useClickAway(() => {
    !isNull(openId) && setOpenId(null);
  }, refPPopover);

  const handleOpen = (id: number) => {
    setOpenId(id);
    const position = refTarget.current[id]?.getBoundingClientRect();
    console.log('id --- position ---- window scroll:>> ', id, position, window.scrollY);

    if (position) {
      const top = Math.ceil(position?.top) - 234 + window.scrollY;
      const left = Math.ceil(position?.left) - 132;

      setPosition({ top, left });
    }
  };

  const iSuccess = data.every((item) => !isNull(item.count));

  return (
    <Card className='relative mb-5 mt-10' bodyStyle={{ padding: '50px 30px' }}>
      <Flex className='relative' align='flex-start' justify='space-between'>
        <Icon name='hat' width={62} height={62} className='py-4' />
        <Flex className='flex-auto'>
          {data.map((item, index) => (
            <div key={index} className='flex-auto pb-5 pt-3'>
              <Flex vertical align='center' className='relative'>
                <span
                  className={clsx(
                    'absolute top-[34px] z-10 h-[6px] w-[calc(100%-2px)]',
                    !isNull(item.count) ? 'bg-[#EE4D52]' : 'bg-[#CDCBDB]',
                  )}
                />
                <Icon name={item.id as IconName} className='relative z-20' />

                {openId !== index && (
                  <Flex
                    id={`event-${index}`}
                    ref={(element) => (refTarget.current[index] = element)}
                    vertical
                    align='center'
                    className='popup w-[64px] rounded-xl bg-white p-[20px_6px_16px_6px] shadow-[0px_3px_24px_0px_#0000001A]'
                  >
                    <Text
                      className={clsx('mb-1 text-xl', !isNull(item.count) ? 'text-[#EE4D52]' : 'text-[#9494A3]')}
                    >{`$${item.value || '?'}`}</Text>
                    <Text className='mb-1 text-sm text-[#9494A3]'>{item.count ? `Touch ${item.count}` : '...'}</Text>

                    {!!item.count && (
                      <div
                        className='flex w-[20px] cursor-pointer justify-center pt-2'
                        onClick={() => handleOpen(index)}
                      >
                        <Icon name='arrow-down' width={12} height={8} />
                      </div>
                    )}
                  </Flex>
                )}
              </Flex>
            </div>
          ))}
        </Flex>
        <Icon name={iSuccess ? 'win' : 'lose'} width={62} height={62} className='py-4' />
      </Flex>

      {!isNull(openId) && (
        <Flex
          ref={refPPopover}
          vertical
          align='center'
          className={clsx(
            'popup absolute z-30 w-[168px] rounded-xl bg-white p-[24px] shadow-[0px_3px_24px_0px_#0000001A]',
            !isNull(openId) ? 'open' : 'close',
          )}
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
      )}
    </Card>
  );
};
