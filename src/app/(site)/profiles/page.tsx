'use client';

import { Statistic } from '@/components';
import { Fragment } from 'react';
import { ProfileList } from './components';

export default function ProfilesPage() {
  return (
    <Fragment>
      <Statistic />
      <ProfileList />
    </Fragment>
  );
}
