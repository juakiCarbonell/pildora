import CommunityLogo from '@/app/ui/community-logo';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, HomeIcon } from '@heroicons/react/24/outline';

export default function Info() {
  return (
    <div className="flex min-h-screen flex-col p-2">
      <div className="lg flex h-20 shrink-0 items-end rounded-md bg-orange-500 p-4 md:h-36">
        <CommunityLogo />
      </div>
      <div className="lg mt-2 flex items-end justify-items-end">
        <div className="lg mt-2 flex items-end justify-end w-full gap-2">
          <Link
            href="/"
            className="flex items-center gap-5 self-start rounded-lg bg-orange-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-400 md:text-base"
          >
            <span>Back</span> <ArrowLeftIcon className="w-5 md:w-6" />
          </Link>

          <Link
            href="/info"
            className="flex items-center gap-5 self-start rounded-lg border border-orange-500 bg-white px-6 py-3 text-sm font-medium text-orange-500 transition-colors hover:bg-gray-200 md:text-base"
          >
            <span>Dashboard</span> <HomeIcon className="w-5 md:w-6" />
          </Link>
        </div>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg  px-6 py-10 md:w-2/5 md:px-20">
          <h1 className="text-2xl">Comunidad Front</h1>
          <p>
            Lorem fistrum está la cosa muy malar hasta luego Lucas llevame al
            sircoo apetecan. Al ataquerl ese pedazo de diodenoo caballo blanco
            caballo negroorl apetecan pecador quietooor ese que llega tiene
            musho peligro ese pedazo de hasta luego Lucas. La caidita diodenoo
            quietooor caballo blanco caballo negroorl benemeritaar ese pedazo de
            por la gloria de mi madre te voy a borrar el cerito. Al ataquerl te
            voy a borrar el cerito está la cosa muy malar condemor quietooor
            llevame al sircoo no te digo trigo por no llamarte Rodrigor está la
            cosa muy malar sexuarl. Apetecan la caidita torpedo te va a hasé
            pupitaa pecador. Ese que llega ese hombree ahorarr va usté muy
            cargadoo pupita quietooor jarl. Qué dise usteer qué dise usteer la
            caidita te va a hasé pupitaa. Qué dise usteer a peich me cago en tus
            muelas fistro a gramenawer de la pradera la caidita pupita sexuarl
            va usté muy cargadoo.
          </p>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/community.jpg"
            width={1000}
            height={760}
            priority
            className="hidden rounded-md md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/community.jpg"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </div>
  );
}
