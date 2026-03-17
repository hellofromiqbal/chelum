'use client'

import Link from 'next/link';
import Image from 'next/image';
import myPhoto1 from "@/assets/images/pp2.jpg";
import SectionTitle from '../SectionTitle/SectionTitle';
import { staticData } from '@/assets/data/staticData';
import { FaCaretRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import { motionProps } from '@/helper/framerMotion';
import { firaCode } from '@/libs/font';

export default function About() {
  return (
    <section id='about' className="py-10 md:pt-10 md:pb-20" >
      <motion.div className='flex flex-col gap-6 relative' {...motionProps(50, .5, .3)}>
        <SectionTitle number={'01.'} title='About'/>
        <div className='grid grid-cols-12 gap-y-10 md:gap-y-0'>
          <div className='col-span-12 md:col-span-0 md:col-start-1 md:col-end-7 lg:col-start-1 lg:col-end-8 flex flex-col gap-4 text-darkSlate'>
            {staticData.about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <ul className={`${firaCode.className} grid grid-cols-2 grid-rows-3 gap-1`}>
              {staticData.about.technologies.map((technology) => (
                <li key={technology.name} className='text-sm w-max hover:text-primaryGreen transition-all duration-300'>
                  <Link href={technology.url} className='flex gap-1 items-center' target='_blank'>
                    <FaCaretRight/>
                    {technology.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='col-span-12 md:col-span-0 md:col-start-8 md:col-end-13 lg:col-start-9 lg:col-end-13 flex justify-center relative'>
            <div className='group relative md:absolute top-0 left-0 w-max h-max'>
              <div
                className="w-62.5 md:w-70 lg:w-75 h-62.5 md:h-70 lg:h-75 md:absolute group-hover:-mt-2 md:group-hover:-mt-1.25 group-hover:mb-2 md:group-hover:mb-1.25 group-hover:-ml-2 md:group-hover:-ml-1.25 transition-all duration-300 rounded-md overflow-hidden"
              >
                <Image src={myPhoto1} alt='myPhoto' className='object-cover w-full h-full filter grayscale hover:filter-none transition-all duration-300'/>
              </div>
              <span className="absolute -z-10 top-3 left-3 w-62.5 md:w-70 lg:w-75 h-62.5 md:h-70 lg:h-75 border-2 border-primaryGreen rounded-md transition-all duration-300 group-hover:mt-px group-hover:ml-px md:group-hover:mt-0.75 md:group-hover:ml-0.75"></span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
