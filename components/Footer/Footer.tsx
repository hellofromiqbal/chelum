import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks'
import { firaCode } from '@/libs/font'

export default function Footer() {
  return (
    <footer className='h-20 flex flex-col justify-center items-center gap-4'>
      <SocialMediaLinks shrinkOnMobileView={true}/>
      <p className={`${firaCode.className} text-xs text-darkSlate`}>© 2026 CHELUM. All rights reserved. Crafted with passion and Malaysian heritage.</p>
    </footer>
  )
}
