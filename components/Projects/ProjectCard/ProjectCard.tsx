'use client'

import { CiFolderOn } from 'react-icons/ci';
import ExternalLinks from '../ExternalLinks/ExternalLinks';
import { type ProjectType } from "@/libs/types";
import { firaCode } from '@/libs/font';

export default function ProjectCard({ project } : { project: ProjectType }) {
  return (
    <div className='px-6 pt-6 pb-8 w-full h-max md:min-h-70 bg-lightNavy flex flex-col gap-6 rounded-md shadow-lg cursor-pointer'>
      <div className='flex justify-between items-center'>
        <CiFolderOn className='text-lightSlate' size={40}/>
        <ExternalLinks links={project.links}/>
      </div>
      <div className='flex flex-col gap-2'>
        <h4 className='text-lightSlate text-xl font-semibold'>{project.title}</h4>
        <p className='text-darkSlate text-sm'>{project.description}</p>
      </div>
      <ul className={`${firaCode.className} flex gap-4 text-xs text-darkSlate flex-wrap leading-px mt-auto`}>
        {project.technologies.map((technology: string, index: number) => (
          <li key={index}>{technology}</li>
        ))}
      </ul>
    </div>
  )
}
