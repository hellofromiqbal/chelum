'use client'

import SectionTitle from '@/components/SectionTitle/SectionTitle';
import Tabs from './Tabs/Tabs';
import { motion } from 'framer-motion';
import { motionProps } from '@/helper/framerMotion';

export default function Experience() {
  return (
    <section id='experience' className="py-10 md:pt-10 md:pb-20">
      <motion.div className='lg:w-9/12 flex flex-col gap-6 mx-auto relative' {...motionProps(50, .5, .3)}>
        <SectionTitle number='02.' title={`Experience`}/>
        <Tabs/>
      </motion.div>
    </section>
  )
}
