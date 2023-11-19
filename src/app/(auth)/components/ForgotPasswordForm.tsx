'use client';

import { Icon } from '@/components';
import { useApp } from '@/hooks';
import { UserOutlined } from '@ant-design/icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Card, Form, Input } from 'antd';
import clsx from 'clsx';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { FormItem } from 'react-hook-form-antd';
import * as z from 'zod';

const schema = z.object({
  email: z.string().min(1, { message: 'This field is required' }),
});

export const ForgotPasswordForm = () => {
  const { message } = useApp();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn('credentials', {
      ...data,
      redirect: false,
    })
      .then((callback) => {
        if (callback?.error) {
          message.error('Invalid credentials!');
        }

        if (callback?.ok) {
          router.push('/');
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className='flex h-[100vh] items-center justify-center'>
      <Card
        title={<Icon name='logo' width={170} height={60} className='mx-auto py-6' />}
        bordered={false}
        style={{ width: '400px', maxWidth: '100%', boxShadow: 'none', backgroundColor: 'transparent' }}
        headStyle={{ border: 0 }}
      >
        <Form onFinish={handleSubmit(onSubmit)}>
          <FormItem name='email' control={control} className={clsx(errors.email && 'mb-8')}>
            <Input
              size='large'
              type='email'
              placeholder='Email'
              disabled={isLoading}
              prefix={<UserOutlined className='site-form-item-icon' />}
            />
          </FormItem>
          <Form.Item>
            <Button
              block
              type='primary'
              htmlType='submit'
              className='login-form-button h-[42px] text-base'
              disabled={isLoading}
            >
              Reset password
            </Button>
          </Form.Item>
          <Link href='/login' className='block text-center text-[#656589]'>
            Back to login
          </Link>
        </Form>
      </Card>
    </div>
  );
};
