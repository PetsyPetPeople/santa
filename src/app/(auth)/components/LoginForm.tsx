'use client';

import { Icon } from '@/components';
import { useApp } from '@/hooks';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Card, Form, Input } from 'antd';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { FormItem } from 'react-hook-form-antd';
import * as z from 'zod';

const schema = z.object({
  email: z.string().min(1, { message: 'Required' }),
  password: z.string().min(1, { message: 'Required' }),
});

export const LoginForm = () => {
  const { message } = useApp();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit } = useForm({
    defaultValues: { email: 'santa123@domain.com', password: 'santa@123' },
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
          message.success('Login successful!');
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
          <FormItem name='email' control={control}>
            <Input
              size='large'
              type='email'
              placeholder='Username or email'
              disabled={isLoading}
              prefix={<UserOutlined className='site-form-item-icon' />}
            />
          </FormItem>
          <FormItem name='password' control={control}>
            <Input
              size='large'
              type='password'
              placeholder='Password'
              disabled={isLoading}
              prefix={<LockOutlined className='site-form-item-icon' />}
            />
          </FormItem>
          <Form.Item>
            <Button
              block
              size='large'
              type='primary'
              htmlType='submit'
              className='login-form-button h-[48px] text-base'
              disabled={isLoading}
            >
              HO HO GO!
            </Button>
          </Form.Item>
          <Link href='/forgot-password' className='block text-center text-sm text-[#656589]'>
            Forget your password?
          </Link>
        </Form>
      </Card>
    </div>
  );
};
