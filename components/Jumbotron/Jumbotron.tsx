'use client'

import { staticData } from '@/assets/data/staticData';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';
import { motion } from 'framer-motion';
import { motionProps } from '@/helper/framerMotion';
import { firaCode } from '@/libs/font';

export default function Jumbotron() {
  return (
    <section id='jumbotron' className="-mt-16 min-h-screen flex flex-col justify-center gap-6">
      <motion.h1
        className={`${firaCode.className} text-primaryGreen relative`}
        { ...motionProps(10, .3, .9) }
      >{staticData.jumbotron.preName}</motion.h1>
      <div className="flex flex-col gap-2">
        <motion.h2
          className="text-lightSlate text-4xl md:text-6xl font-bold relative"
          { ...motionProps(10, .3, 1.1) }
        >{staticData.jumbotron.name}</motion.h2>
        <motion.h3
          className="text-darkSlate text-4xl md:text-6xl font-bold relative"
          { ...motionProps(10, .3, 1.3) }
        >{staticData.jumbotron.shortDesc}</motion.h3>
      </div>
      <motion.p
        className="text-darkSlate md:w-3/6 relative"
        { ...motionProps(10, .3, 1.5) }
      >{staticData.jumbotron.quickDesc}</motion.p>
      <motion.div
        className='relative'
        { ...motionProps(10, .3, 1.7) }
      >
        <SocialMediaLinks shrinkOnMobileView={true}/>
      </motion.div>
    </section>
  )
}
