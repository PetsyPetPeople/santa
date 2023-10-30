import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

const getCurrentUser = async () => {
  try {
    const session = await getServerSession(authOptions);
    console.log('getCurrentUser :>> ', session);

    if (!session?.user?.email) {
      return null;
    }

    // if (!currentUser) {
    //   return null;
    // }

    // return currentUser;
  } catch (error: any) {
    return null;
  }
};

export default getCurrentUser;
