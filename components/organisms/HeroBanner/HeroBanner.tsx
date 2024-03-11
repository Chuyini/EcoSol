import { FunctionComponent, HtmlHTMLAttributes } from 'react';
import Image from 'next/image';
import ChurchIcon from '../../atoms/icons/Church';

interface HeroBannerProps extends HtmlHTMLAttributes<HTMLElement> {
   img: string;
   title: string;
   description?: string;
}

const HeroBanner: FunctionComponent<HeroBannerProps> = ({
   img,
   title,
   description,
}) => {
   return (
      <div className='relative  w-full bg-center'>
         <Image
            className=' '
            src={img}
            alt='HeroBanner '
            width={200}
            height={200}
         />
         <div className='  absolute top-0 h-full border bg-sky-100 opacity-0'>
            <ChurchIcon className='h-12 w-12 text-primary-1' />
            <div className='  pl-2 pr-1 text-center font-serif text-6xl  text-black lg:pr-24 lg:text-left lg:text-7xl'>
               <h1 className='opacity-100'>{title}</h1>
            </div>
            <div className=' bottom-32 right-2 text-center font-serif text-3xl  lg:pr-20 lg:text-left lg:text-2xl'>
               <h3 className='inline'>{description}</h3>
            </div>
         </div>
      </div>
   );
};

export default HeroBanner;
