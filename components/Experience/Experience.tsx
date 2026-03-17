'use client'

// import SectionTitle from '@/components/SectionTitle/SectionTitle';
import Tabs from './Tabs/Tabs';
import { motion } from 'framer-motion';
import { motionProps } from '@/helper/framerMotion';

export default function Experience() {
  return (
    <section id='experience' className='bg-slate-50'>
      <div className="py-10 md:pt-10 md:pb-20 max-w-6xl mx-auto px-5 md:px-24 lg:px-20">
        <motion.div className='lg:w-9/12 flex flex-col gap-6 mx-auto relative' {...motionProps(50, .5, .3)}>
          {/* <SectionTitle
            number='02.'
            title={`Experience`}
            numberColor='text-gray-500'
            titleColor='text-black'
            lineColor='text-gray-900'
          /> */}
          <Tabs/>
        </motion.div>
      </div>
    </section>
  )
}
