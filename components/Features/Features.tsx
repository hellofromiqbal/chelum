'use client'

import { motion } from 'framer-motion';
import { motionProps } from '@/helper/framerMotion';
import { staticData } from '@/assets/data/staticData';

export default function Features() {
  return (
    <section id='features' className='bg-slate-50'>
      <div className="py-10 md:pt-10 md:pb-20 max-w-6xl mx-auto px-5 md:px-24 lg:px-20">
        <motion.div className='flex flex-col gap-6 mx-auto relative' {...motionProps(50, .5, .3)}>
          <div className="grid md:grid-cols-3 gap-8">
            {staticData.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-amber-200 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="text-background" size={28} />
                </div>
                <h3 className="text-xl text-zinc-900 mb-3">{feature.title}</h3>
                <p className="text-zinc-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
