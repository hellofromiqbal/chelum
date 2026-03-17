'use client'

import { staticData } from '@/assets/data/staticData';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';
import { motion } from 'framer-motion';
import { motionProps } from '@/helper/framerMotion';

export default function Jumbotron() {
  return (
    <section id='jumbotron' className="-mt-16 min-h-screen md:min-h-[75vh] 2xl:min-h-[80vh] flex bg-[url('/chelum_display2.png')] bg-cover bg-no-repeat relative">
      <div className="absolute inset-0 bg-navy/70"></div>
      <div className="flex flex-col justify-end md:justify-center gap-6 max-w-6xl mx-auto px-5 md:px-24 lg:px-0 lg:w-1/2 pb-10 md:pb-0">
        <div className="flex flex-col gap-0">
          <motion.h2
            className="text-slate-100 text-6xl md:text-8xl font-bold relative -ml-1"
            { ...motionProps(10, .3, .9) }
          >{staticData.jumbotron.name.toUpperCase()}</motion.h2>
          <motion.h3
            className="text-slate-200 text-2xl md:text-4xl font-semibold relative"
            { ...motionProps(10, .3, 1.1) }
          >{staticData.jumbotron.shortDesc}</motion.h3>
        </div>
        <motion.p
          className="md:text-lg text-slate-300 w-4/6 md:w-3/6 2xl:w-2/6 relative"
          { ...motionProps(10, .3, 1.3) }
        >{staticData.jumbotron.quickDesc}</motion.p>
        <motion.div
          className='relative'
          { ...motionProps(10, .3, 1.5) }
        >
          <SocialMediaLinks shrinkOnMobileView={true}/>
        </motion.div>
      </div>
    </section>
  )
}
