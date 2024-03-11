import { FunctionComponent, ReactNode } from 'react';

interface HeroBannerContentProps {
   icon?: ReactNode;
   title: string;
   description?: string;
}

const HeroBannerContent: FunctionComponent<HeroBannerContentProps> = ({
   icon,
   title,
   description,
}) => {
   return (
      <div className=' absolute  top-0 flex h-full w-full  flex-col justify-center p-12  lg:w-10/12 '>
         {icon}
         <h1
            className={
               (!description ? 'mx-auto text-center ' : ' text-left ') +
               'lgg:mx-0 mx-auto my-4 text-center font-serif text-lg font-semibold text-white lg:text-left lg:text-5xl '
            }
         >
            {title.split(' ').map((word, index) =>
               word === 'EcoSol' ? (
                  <span key={index} className='text-primary-1'>
                     {word + ' '}
                  </span>
               ) : (
                  word + ' '
               )
            )}
         </h1>
         {description && (
            <p className=' my-4 hidden text-center font-serif text-xs text-white lg:block  lg:pr-20 lg:text-left lg:text-xl'>
               {description}
            </p>
         )}
      </div>
   );
};

export default HeroBannerContent;
