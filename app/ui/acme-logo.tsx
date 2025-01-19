import { PresentationChartBarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function ROASLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <PresentationChartBarIcon className="h-12 w-12 " />
      <p className="text-[36px] md:text-[44px]">ROAS Master</p>
    </div>
  );
}
