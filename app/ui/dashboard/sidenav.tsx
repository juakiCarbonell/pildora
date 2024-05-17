import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import CommunityLogo from '@/app/ui/community-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col">
      <Link
        className="flex h-20 items-end justify-start rounded-md bg-orange-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-16 text-white md:w-40">
          <CommunityLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 bg-slate-100">
        <NavLinks />
        <div className="hidden h-auto w-full grow md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-slate-200 hover:text-orange-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Log Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
