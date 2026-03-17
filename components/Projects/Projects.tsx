'use client'

import Link from 'next/link';
import SectionTitle from '../SectionTitle/SectionTitle';
import ProjectCard from './ProjectCard/ProjectCard';
import FeaturedProjectCard from './FeaturedProjectCard/FeaturedProjectCard';
import { staticData } from '@/assets/data/staticData';
import { motion } from 'framer-motion';
import { motionProps } from '@/helper/framerMotion';
import { firaCode } from '@/libs/font';

export default function Projects() {
  return (
    <section id='projects' className="py-10 md:pt-10 md:pb-20 flex flex-col gap-6 max-w-6xl mx-auto px-5 md:px-24 lg:px-20">
      <motion.div className='relative' {...motionProps(50, .3, .3)}>
        <SectionTitle number='03.' title='Projects'/>
      </motion.div>
      <div className='flex flex-col gap-32 md:gap-40'>
        <div className='flex flex-col gap-8 md:gap-24'>
          {staticData.projects.filter((project) => project.featured).map((project, index) => (
            <motion.div key={project.title} className='relative' {...motionProps(50, .5, .3)}>
              <FeaturedProjectCard project={project} reversed={index % 2 === 0}/>
            </motion.div>
          ))}
        </div>
        <div className='flex flex-col gap-14 md:gap-10'>
          <div className='flex flex-col gap-2 items-center'>
            <motion.h3
              className='text-2xl text-lightSlate font-bold relative'
              {...motionProps(50, .5, .3)}
            >Other Noteworthy Projects</motion.h3>
            <motion.span className='relative' {...motionProps(50, .3, .3)}>
              <Link href={"#"} className={`${firaCode.className} hidden text-sm text-primaryGreen w-max`}>view the archive</Link>
            </motion.span>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-4'>
            {staticData.projects.filter((project) => !project.featured).map((project, index) => (
              <div key={index}>
                <motion.div className='relative hidden md:block' {...motionProps(10, .5, .3 * (index + 1))}>
                  <ProjectCard project={project}/>
                </motion.div>
                <motion.div className='relative md:hidden'{...motionProps(50, .5, .3)}>
                  <ProjectCard project={project}/>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
