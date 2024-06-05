import Image from 'next/image';
import CommunityLogo from '@/app/ui/community-logo';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-2">
      <div className="lg flex h-36 shrink-0 items-end rounded-md bg-orange-500 p-4">
        <CommunityLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 lg:flex-row">
        <div className="flex flex-col items-center justify-center gap-6 rounded-lg  px-6 py-10 lg:w-2/5 lg:items-start lg:px-20">
          <p className=" text-xl text-gray-800  lg:text-3xl lg:leading-normal">
            <strong>Comunidad Front.</strong> Portal de usuarios{' '}
          </p>

          <div className="flex gap-4">
            <Link
              href="/dashboard"
              className="text-nowrap flex items-center gap-5 self-start rounded-lg bg-orange-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-400 lg:text-base"
            >
              <span>Dashboard</span> <ArrowRightIcon className="w-5 lg:w-6" />
            </Link>

            <Link
              prefetch={false}
              href="/info"
              className="text-nowrap  flex items-center gap-5 self-start rounded-lg border border-orange-500 bg-white px-6 py-3 text-sm font-medium text-orange-500 transition-colors hover:bg-gray-200 lg:text-base"
            >
              <span>Más Info</span> <ArrowRightIcon className="w-5 lg:w-6" />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-2 lg:w-3/5 lg:px-12 lg:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/community.jpg"
            width={1000}
            height={760}
            priority
            className="hidden rounded-md lg:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/community.jpg"
            width={560}
            height={620}
            className="block rounded-md lg:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
