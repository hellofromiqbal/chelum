import Image from 'next/image';
import ExternalLinks from '../ExternalLinks/ExternalLinks';
import { type SignatureProductCard } from '@/libs/types';
import { firaCode } from '@/libs/font';

export default function SignatureProductCard({ product, reversed } : SignatureProductCard) {
  return (
    <div className='grid grid-cols-8 bg-lightNavy md:bg-transparent p-6 md:p-0 rounded-sm md:rounded-none'>
      <div className={`hidden md:col-span-5 md:flex overflow-hidden rounded-sm ${reversed ? 'order-2 justify-end' : 'order-1 justify-start'}`}>
        <div className='md:w-100 lg:w-145 md:h-65 lg:h-87.5 bg-lightSlate rounded-sm relative'>
          <Image src={product.imgUrl} alt='project-image' className='w-full h-full'/>
        </div>
      </div>
      <div className={`col-span-8 md:col-span-3 flex flex-col gap-6 justify-center ${reversed ? 'order-1 text-start': 'order-2 md:text-end'}`}>
        <div>
          <h4 className={`${firaCode.className} text-sm text-primaryGreen`}>Signature</h4>
          <h3 className='text-2xl text-yellow-300 uppercase font-semibold'>{product.title}</h3>
        </div>
        <div className={`relative z-10 md:p-6 md:bg-lightNavy md:text-sm text-slate-300 md:w-125 md:rounded-md md:shadow-lg flex flex-col gap-2 ${reversed ? 'self-start' : 'self-end'}`}>
          <p className='text-sm'>{product.description}</p>
          <p className='ms-auto text-yellow-300'>RM {product.price}</p>
        </div>
        {/* <ul className={`${firaCode.className} relative z-10 md:w-125 flex flex-wrap text-nowrap gap-4 text-xs text-slate-300 leading-px ${reversed ? 'justify-start self-start' : 'md:justify-end md:self-end'}`}>
          {product.technologies.map((technology, index) => (
            <li key={index}>{technology}</li>
          ))}
        </ul> */}
        {/* <ExternalLinks links={product.links} reversed={reversed}/> */}
      </div>
    </div>
  )
}
