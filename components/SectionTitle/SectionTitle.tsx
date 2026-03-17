import { type SectionTitleProps } from "@/libs/types";
import { firaCode } from '@/libs/font';

export default function SectionTitle({ number, title } : SectionTitleProps) {
  return (
    <div className='flex gap-5 md:w-1/2 lg:w-3/5'>
      <div className='flex items-baseline gap-4 w-max'>
        <span className={`${firaCode.className} text-primaryGreen text-lg font-medium`}>{number}</span>
        <h2 className='text-lightSlate text-2xl font-bold'>{title}</h2>
      </div>
      <hr className='grow opacity-20 self-center'/>
    </div>
  )
}
