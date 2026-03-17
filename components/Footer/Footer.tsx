import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks'
import { firaCode } from '@/libs/font'

export default function Footer() {
  return (
    <footer className='h-20 flex flex-col justify-center items-center gap-4'>
      <SocialMediaLinks shrinkOnMobileView={true}/>
      <p className={`${firaCode.className} text-xs text-darkSlate`}>Designed & built by Muhammad Iqbal.</p>
    </footer>
  )
}
