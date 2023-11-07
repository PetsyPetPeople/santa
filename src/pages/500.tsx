import { Button, Flex, Result } from 'antd';
import { useEffect } from 'react';

export default function RootErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Flex justify='center' align='center' className='h-screen w-screen'>
      <Result
        status='500'
        title='500'
        subTitle='Sorry, something went wrong.'
        extra={
          <Button type='primary' onClick={reset}>
            Back Home
          </Button>
        }
      />
    </Flex>
  );
}
