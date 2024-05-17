// import UsersChart from '@/app/ui/dashboard/users-chart';
import { Suspense } from 'react';
import Image from 'next/image';

export default async function Dashboard() {
  return (
    <div>
      Dashboard
      <div>
        {/* <Suspense fallback={<p>Loading</p>}>
          <UsersChart />
        </Suspense> */}
      </div>
      <div>
        <p>I am already here</p>
      </div>
    </div>
  );
}
