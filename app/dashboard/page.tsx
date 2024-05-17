// import UsersChart from '@/app/ui/dashboard/users-chart';
import { Suspense } from 'react';
import { fetchProfiles } from '@/app/lib/data';
import Image from 'next/image';

export default async function Dashboard() {
  const profiles = await fetchProfiles();
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
      <div>
        {profiles.map((profile) => (
          <div key={profile.id}>
            <p>{profile.firstname}</p>
            <div>
              <Image
                width={50}
                height={50}
                src={profile.image}
                alt={profile.firstname}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
