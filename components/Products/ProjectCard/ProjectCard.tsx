'use client'

import { type ProductType } from "@/libs/types";
import Image from 'next/image';

export default function ProjectCard({ product } : { product: ProductType }) {
  return (
    <div className='h-125 md:min-h-125 grid gap-0 grid-rows-[2fr_1fr] rounded-md shadow-lg overflow-hidden'>
      <div className='bg-red-200 h-full md:h-full relative'>
        <Image 
          src={product.imgUrl} 
          alt='project-image' 
          fill
          className='object-cover'
        />
      </div>
      <div className='px-6 py-6 w-full bg-lightNavy flex flex-col'>
        <h4 className='text-yellow-300 text-xl font-semibold'>{product.title}</h4>
        <p className='text-slate-300 text-sm'>{product.description}</p>
        <p className='ms-auto text-yellow-300 mt-auto'>RM {product.price} {product.piece && '/piece'}</p>
      </div>
    </div>
  )
}
