'use client';

import { Divider, Flex, Typography } from 'antd';
import { TitleProps } from 'antd/es/typography/Title';
import clsx from 'clsx';

const { Title } = Typography;

interface HeadingProps extends TitleProps {
  rootClassName?: string;
  text: string | React.ReactNode;
}

export function Heading({ level = 2, text, className, rootClassName, ...props }: HeadingProps) {
  return (
    <Flex vertical className={rootClassName}>
      <Title level={level} className={clsx('mb-0 font-normal', className)} {...props}>
        {text}
      </Title>
      <Divider className='mb-0 mt-3 bg-[#E5E5EF]' />
    </Flex>
  );
}
