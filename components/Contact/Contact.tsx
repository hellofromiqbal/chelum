'use client'

import { staticData } from '@/assets/data/staticData';
import { motion } from 'framer-motion';
import { motionProps } from '@/helper/framerMotion';
import Link from 'next/link';
import { firaCode } from '@/libs/font';

export default function Contact() {
  return (
    <section id='contact' className="h-[calc(100vh-9rem)] md:h-[calc(85vh-9rem)] lg:h-[calc(100vh-9rem)] flex flex-col justify-center max-w-6xl mx-auto px-5 md:px-24 lg:px-20">
      <motion.div className='flex flex-col gap-5 items-center relative' {...motionProps(50, .3, .3)}>
        <p className={`${firaCode.className} text-primaryGreen`}>{staticData.contact.preTitle}</p>
        <h2 className='text-lightSlate text-4xl md:text-5xl font-bold'>{staticData.contact.title}</h2>
        <p className='md:w-5/6 lg:w-3/5 text-darkSlate text-center'>{staticData.contact.paragraph}</p>
        <Link href={staticData.contact.buttonUrl} className='relative mt-8 bg-primaryGreen w-30 h-12.5 mx-auto rounded-md group'>
          <span className={`${firaCode.className} w-full h-full flex justify-center items-center text-sm text-primaryGreen border border-primaryGreen rounded-md absolute top-0 left-0  bg-navy group-hover:-top-1 group-hover:-left-1 transition-all duration-150`}>{staticData.contact.buttonText}</span>
        </Link>
      </motion.div>
    </section>
  )
}
