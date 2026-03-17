import Image from 'next/image';
import { type SignatureProductCard } from '@/libs/types';
import { firaCode } from '@/libs/font';

export default function SignatureProductCard({ product, reversed } : SignatureProductCard) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-8 grid-rows-[2fr_1fr] md:grid-rows-1 bg-lightNavy md:bg-transparent md:p-0 rounded-md md:rounded-none h-125 md:h-max overflow-hidden'>
      <div className={`hidden md:col-span-5 md:flex overflow-hidden rounded-sm ${reversed ? 'order-2 justify-end' : 'order-1 justify-start'}`}>
        <div className='md:w-max lg:w-145 md:h-65 lg:h-87.5 bg-lightSlate rounded-sm relative overflow-hidden'>
          <Image src={product.imgUrl} alt='project-image' className='w-full h-full'/>
        </div>
      </div>
      <div className='h-full md:h-full relative md:hidden'>
        <Image 
          src={product.imgUrl} 
          alt='project-image' 
          fill
          className='object-cover'
        />
      </div>
      <div className={`p-6 col-span-8 md:col-span-3 flex flex-col gap-6 justify-center ${reversed ? 'order-1 text-start': 'order-2 md:text-end'}`}>
        <div>
          <h4 className={`${firaCode.className} text-sm text-primaryGreen`}>Signature</h4>
          <h3 className='text-2xl text-yellow-300 uppercase font-semibold'>{product.title}</h3>
        </div>
        <div className={`relative z-10 md:p-6 md:bg-lightNavy md:text-sm text-slate-300 md:w-125 md:rounded-md md:shadow-lg flex flex-col gap-2 ${reversed ? 'self-start' : 'self-end'}`}>
          <p className='text-sm'>{product.description}</p>
          <p className='ms-auto text-yellow-300'>RM {product.price}</p>
        </div>
      </div>
    </div>
  )
}
