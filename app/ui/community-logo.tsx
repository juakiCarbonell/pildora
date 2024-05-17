// import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { encodeSans } from '@/app/ui/fonts';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

export default function CommunityLogo() {
  return (
    <div
      className={`${encodeSans.className} flex flex-col align-text-top leading-none text-white`}
    >
      <CodeBracketIcon className="h-12 w-12"/>
      <p className="text-[28px]">Frontend Community</p>
    </div>
  );
}
