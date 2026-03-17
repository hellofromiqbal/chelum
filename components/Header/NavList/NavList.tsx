import Link from 'next/link';
import { staticData } from '@/assets/data/staticData';
import { motion } from 'framer-motion';
import { motionProps } from '@/helper/framerMotion';
import { firaCode } from '@/libs/font';

type NavListProps = {
  onClick?: () => void;
};

export default function NavList({ onClick }: NavListProps) {
  return (
    <ul className={`${firaCode.className} flex flex-col px-5 md:px-0 md:flex-row gap-8`}>
      {staticData.header.navLinks.map((navLink, index) => (
        <div key={index}>
          <motion.li className='relative hidden md:block' {...motionProps(-20, .3, .1 * (index + 1))}>
            <Link href={navLink.url} className='group' onClick={onClick}>
              <span className="text-sm md:text-xs text-primaryGreen">{index + 1 < 10 ? `0${index + 1}. ` : `${index + 1}. `}</span>
              <span className='text-base md:text-sm text-lightSlate group-hover:text-primaryGreen'>{navLink.name}</span>
            </Link>
          </motion.li>
          <motion.li className='relative md:hidden'>
            <Link href={navLink.url} className='group' onClick={onClick}>
              <span className="text-sm md:text-xs text-primaryGreen">{index + 1 < 10 ? `0${index + 1}. ` : `${index + 1}. `}</span>
              <span className='text-base md:text-sm text-lightSlate group-hover:text-primaryGreen'>{navLink.name}</span>
            </Link>
          </motion.li>
        </div>
      ))}
    </ul>
  )
}
