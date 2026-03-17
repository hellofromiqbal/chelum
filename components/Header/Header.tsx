'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import NavList from './NavList/NavList';

export default function Header() {
  const { scrollY } = useScroll();
  const [ hideNavbar, setHideNavbar ] = useState(false);
  const [ hamburgerMenu, setHamburgerMenu ] = useState(false);
  const handleHamburgerMenu = () => setHamburgerMenu((prev) => !prev);

  useMotionValueEvent(scrollY, "change", (latVal) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const preVal: any = scrollY.getPrevious();
    if(latVal > preVal && latVal > 150) {
      setHideNavbar(true);
      setHamburgerMenu(false);
    } else {
      setHideNavbar(false);
      setHamburgerMenu(false);
    };
  });
  
  return (
    <motion.header
      className='bg-navy sticky top-0 z-20 shadow-xl'
      variants={{ hidden: { y: '-100%' }, visible: { y: 0 } }}
      animate={hideNavbar ? 'hidden' : 'visible'}
    >
      <nav className='flex justify-between items-center h-16 px-5 md:px-10 lg:px-20 bg-navy'>
        <Link href={"#jumbotron"} className='text-2xl md:text-3xl text-primaryGreen font-semibold'>MI.</Link>
        <HamburgerMenu checked={hamburgerMenu} onClick={handleHamburgerMenu}/>
        <div className='hidden md:block'>
          <NavList/>
        </div>
        <motion.div
          className='md:hidden bg-navy absolute top-16 right-0 left-0 -z-10 py-5 flex flex-col shadow-xl'
          variants={{ hidden: { y: '-100%', transition: { duration: .3 } }, visible: { y: 0, transition: { duration: .3 } } }}
          initial='hidden'
          animate={hamburgerMenu? 'visible' : 'hidden'}
        >
          <NavList onClick={handleHamburgerMenu}/>
        </motion.div>
      </nav>
    </motion.header>
  )
}
