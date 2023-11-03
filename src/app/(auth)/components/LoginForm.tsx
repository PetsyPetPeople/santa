'use client';

import { Icon } from '@/components';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Card, Form, Input } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { FormItem } from 'react-hook-form-antd';
import { toast } from 'react-toastify';
import * as z from 'zod';

const schema = z.object({
  email: z.string().min(1, { message: 'Required' }),
  password: z.string().min(1, { message: 'Required' }),
});

export const LoginForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit } = useForm({
    defaultValues: { email: 'santa@santa.com', password: 'santa' },
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
          toast.error('Invalid credentials!');
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
        title={<Icon name='logo' width={170} height={60} className='mx-auto' />}
        bordered={false}
        style={{ width: '400px', maxWidth: '100%', boxShadow: 'none' }}
        headStyle={{ textAlign: 'center', backgroundColor: '#F9F9FC' }}
        bodyStyle={{ textAlign: 'center', marginTop: 24, backgroundColor: '#F9F9FC' }}
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
              className='login-form-button'
              disabled={isLoading}
            >
              HO HO GO!
            </Button>
          </Form.Item>
          <Form.Item>
            <Link href='/forgot-password'>
              <Paragraph color='#656589'>Forget your password?</Paragraph>
            </Link>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
