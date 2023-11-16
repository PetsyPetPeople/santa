'use client';

import { Card as AntCard, CardProps as AntCardProps } from 'antd';
import clsx from 'clsx';
import { Ref } from 'react';

interface CardProps extends AntCardProps {
  children: React.ReactNode;
  ref?: Ref<HTMLDivElement>;
  hasBoxShadow?: boolean;
}
export function Card({
  ref,
  children,
  bodyStyle,
  hasBoxShadow = true,
  className = 'rounded-[30px]',
  ...props
}: CardProps) {
  return (
    <AntCard
      ref={ref}
      bordered={false}
      bodyStyle={{ borderRadius: 30, ...bodyStyle }}
      className={clsx(hasBoxShadow ? 'shadow-[2px_10px_36px_0_rgba(13, 10, 44, 0.03)]' : 'shadow-none', className)}
      {...props}
    >
      {children}
    </AntCard>
  );
}
