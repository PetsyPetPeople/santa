'use client';

import { Card as AntCard, CardProps as AntCardProps } from 'antd';
import clsx from 'clsx';
import { Ref } from 'react';

interface CardProps extends AntCardProps {
  children: React.ReactNode;
  ref?: Ref<HTMLDivElement>;
}
export function Card({ ref, children, bodyStyle, className, ...props }: CardProps) {
  return (
    <AntCard
      ref={ref}
      bordered={false}
      bodyStyle={{ backgroundColor: '#F9F9FC', borderRadius: 20, ...bodyStyle }}
      className={clsx('rounded-[20px]', className)}
      {...props}
    >
      {children}
    </AntCard>
  );
}