import { FunctionComponent, HtmlHTMLAttributes, ReactNode } from 'react';
import Image from 'next/image';
import HeroBannerContent from '../../molecules/HeroBannerContent/HeroBannerContent';

interface HeroBannerProps extends HtmlHTMLAttributes<HTMLElement> {
   icon?: ReactNode;
   img: string;
   title: string;
   description?: string;
}

const HeroBanner: FunctionComponent<HeroBannerProps> = ({
   icon,
   img,
   title,
   description,
}) => {
   return (
      <div className='relative flex h-96 w-full justify-center  bg-center'>
         <Image
            className=' saturate-25 h-full w-full object-cover brightness-50 contrast-50 hue-rotate-180  '
            src={img}
            alt='HeroBanner '
            width={200}
            height={200}
         />
         <HeroBannerContent
            title={title}
            description={description}
            icon={icon}
         />
      </div>
   );
};

export default HeroBanner;
