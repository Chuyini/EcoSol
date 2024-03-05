'use client';
import { FunctionComponent, useEffect, useState } from 'react';
import CarrouselButton from '../../atoms/CarrouselButton/CarrouselButton';
import ServiceCard, {
   ServiceCardProps,
} from '../../molecules/ServiceCard/ServiceCard';

interface ServicesProps {
   servicesData: ServiceCardProps[];
   title: string;
   body: string;
}

const Services: FunctionComponent<ServicesProps> = ({
   servicesData,
   title,
   body,
}) => {
   const [currentIndex, setCurrentIndex] = useState(0);

   return (
      <div className='bg-secondary-2 flex w-full flex-col items-center p-4 font-serif text-black '>
         <h1 className='mb-4 mt-12 text-2xl font-semibold'>{title}</h1>
         <p className='mb-12 w-11/12 text-center lg:w-1/4'>{body}</p>
         <div className='m-auto flex w-11/12 flex-col lg:flex-row'>
            {servicesData.map((service, index) => (
               <ServiceCard
                  id={index.toString()}
                  className={
                     index === currentIndex
                        ? 'flex  h-96 origin-center scale-100 '
                        : 'm-0 flex h-0 scale-0 '
                  }
                  ishidden={index !== currentIndex}
                  {...service}
                  key={service.data.title}
               />
            ))}
         </div>
         <div className='mt-28 flex w-28 justify-between lg:hidden'>
            {servicesData.map((service, index) => (
               <CarrouselButton
                  isActive={currentIndex === index}
                  key={service.data.title + 'button'}
                  onClick={() => setCurrentIndex(index)}
               />
            ))}
         </div>
      </div>
   );
};
export default Services;
