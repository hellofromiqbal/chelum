import { ExternalLinksProps } from '@/libs/types';
import Link from 'next/link';
import { FiGithub } from 'react-icons/fi';
import { HiOutlineExternalLink } from 'react-icons/hi';



export default function ExternalLinks({ links, reversed }: ExternalLinksProps) {
  return (
    <ul className={`flex items-center gap-5 ${reversed ? 'self-start' : 'md:self-end'}`}>
      <li className='text-lightSlate hover:text-primaryGreen transition-all duration-300'>
        <Link href={links[0]} target='_blank'>
          <FiGithub size={22}/>
        </Link>
      </li>
      <li className='text-lightSlate hover:text-primaryGreen transition-all duration-300'>
        <Link href={links[1]} target='_blank'>
          <HiOutlineExternalLink size={25}/>
        </Link>
      </li>
    </ul>
  )
}
