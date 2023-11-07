'use client';

import { Flex, Spin, SpinProps } from 'antd';
import clsx from 'clsx';

interface LoadingProps extends SpinProps {
  className?: string;
}

export function Loading({ className, ...props }: LoadingProps) {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Flex justify='center' align='center' className={clsx('h-full w-full', className)}>
      <Spin size='large' {...props} />
    </Flex>
  );
}
