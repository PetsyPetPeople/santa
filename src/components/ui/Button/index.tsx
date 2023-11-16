/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';
import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';

interface ButtonProps extends Omit<AntButtonProps, 'href'> {
  buttonType?: 'button' | 'link';
  href: any;
}

export const Button: FC<ButtonProps> = ({ children, href, buttonType = 'link', className, ...props }) => {
  return buttonType === 'link' && href ? (
    <Link href={href} passHref legacyBehavior>
      <AntButton
        className={clsx('text-md cursor-pointer border-0 pt-[4px] text-[#353538] hover:shadow-md', className)}
        {...props}
      >
        View Attribution
      </AntButton>
    </Link>
  ) : (
    <AntButton {...props}>{children}</AntButton>
  );
};
