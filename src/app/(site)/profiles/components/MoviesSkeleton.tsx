'use client';

import React from 'react';
import { Skeleton } from 'antd';

export const MoviesSkeleton: React.FC = () => {
  return (
    <div>
      <Skeleton.Image active rootClassName='flex w-full' className='h-[120px] w-full' />
      <Skeleton.Button block className='mt-1' />
    </div>
  );
};
