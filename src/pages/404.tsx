import { Button, Flex, Result } from 'antd';
import Link from 'next/link';

export default function RootNotFoundPage() {
  return (
    <Flex justify='center' align='center' className='h-screen w-screen'>
      <Result
        status='404'
        title='404'
        subTitle='Sorry, the page you visited does not exist.'
        extra={
          <Link href='/' passHref>
            <Button type='primary'>Back Home</Button>
          </Link>
        }
      />
    </Flex>
  );
}
