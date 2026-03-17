'use client'

import React, { useState } from 'react';
import { staticData } from '@/assets/data/staticData';
import { FaCaretRight } from 'react-icons/fa';
import { firaCode } from '@/libs/font';

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className='grid grid-cols-8 gap-5 md:gap-10'>
      <ul className={`${firaCode.className} col-span-8 md:col-span-2 flex md:block overflow-auto`}>
        {staticData.experience.map((exp, index: number) => (
          <li key={exp.tabName}>
            <button
              className={`px-5 py-2 w-full text-start hover:bg-lightNavy hover:text-slate-100 transition-all duration-200 cursor-pointer ${index === selectedTab ? 'bg-lightNavy text-slate-100' : 'bg-transparent text-black'}`}
              onClick={() => setSelectedTab(index)}
            >{exp.tabName}</button>
          </li>
        ))}
      </ul>
      <div className='col-span-8 md:col-span-6'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col'>
            <h3 className='text-lightSlate text-lg font-medium'>{staticData.experience[selectedTab].role} <span className='text-primaryGreen'>@ {staticData.experience[selectedTab].company}</span></h3>
            <p className='text-xs md:text-sm text-darkSlate'>{staticData.experience[selectedTab].period}</p>
          </div>
          <ul className='flex flex-col gap-2'>
            {staticData.experience[selectedTab].jobDesc.map((desc, index) => (
              <li key={index} className='flex gap-1 text-darkSlate md:text-sm'>
                <span className='pt-1'><FaCaretRight/></span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
