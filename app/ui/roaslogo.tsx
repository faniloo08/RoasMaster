import { PresentationChartBarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function ROASLogo1() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <PresentationChartBarIcon className="h-12 w-12 text-[#312C58]" />
      <p className="text-[30px] text-[#312C58]">ROAS Master</p>
    </div>
  );
}
