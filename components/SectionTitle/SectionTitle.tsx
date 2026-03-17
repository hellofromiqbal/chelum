import { type SectionTitleProps } from "@/libs/types";
import { firaCode } from '@/libs/font';

export default function SectionTitle({
  number,
  title,
  numberColor = 'text-primaryGreen',
  titleColor = 'text-slate-200',
  lineColor = 'text-slate-200'
} : SectionTitleProps) {
  return (
    <div className='flex gap-5 md:w-1/2 lg:w-3/5'>
      <div className='flex items-baseline gap-4 w-max'>
        <span className={`${firaCode.className} ${numberColor} text-lg font-medium`}>{number}</span>
        <h2 className={`${titleColor} text-2xl font-bold`}>{title}</h2>
      </div>
      <hr className={`${lineColor} grow opacity-20 self-center`}/>
    </div>
  )
}
