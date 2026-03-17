import Link from 'next/link';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { type SocialMediaLinksProps } from '@/libs/types';

export default function SocialMediaLinks({ shrinkOnMobileView }: SocialMediaLinksProps) {
  return (
    <ul className='flex gap-6'>
      <li className='text-slate-100 hover:text-primaryGreen transition-all duration-300'>
        <Link href={"https://web.facebook.com/chelumsarawakchocolate"} target='_blank'>
          <FiGithub className={`${shrinkOnMobileView && 'size-6.25'} md:size-6.25`}/>
        </Link>
      </li>
      <li className='text-slate-100 hover:text-primaryGreen transition-all duration-300'>
        <Link href={"https://www.instagram.com/my.chelum/"} target='_blank'>
          <FiInstagram className={`${shrinkOnMobileView && 'size-6.25'} md:size-6.25`}/>
        </Link>
      </li>
      <li className='text-slate-100 hover:text-primaryGreen transition-all duration-300'>
        <Link href={"https://www.tiktok.com/@chelumchocolate"} target='_blank'>
          <FiLinkedin className={`${shrinkOnMobileView && 'size-6.25'} md:size-6.25`}/>
        </Link>
      </li>
    </ul>
  )
}
