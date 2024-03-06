import { FunctionComponent, HtmlHTMLAttributes } from 'react';
import Image from 'next/image';
import ServiceCardContent, {
   ServiceCardContentProps,
} from '../../atoms/ServiceCardContent/ServiceCardContent';

export interface ServiceCardProps extends HtmlHTMLAttributes<HTMLDivElement> {
   data: ServiceCardContentProps;
   img: string;
   ishidden?: boolean;
}

const ServiceCard: FunctionComponent<ServiceCardProps> = ({
   data,
   img,
   className,
   ishidden,
   ...rest
}) => {
   const cardClasses =
      ' relative  lg:mb-32 lg:mx-auto lg:scale-100  lg:opacity-100 transition transform duration-500 ease-in-out lg:flex lg:h-96 w-full flex-col items-center lg:w-1/4';
   return (
      <div {...rest} className={className + cardClasses}>
         <Image
            src={img}
            alt={data.title}
            width={100}
            className='h-full w-auto rounded-lg  object-cover'
            height={100}
         />
         <ServiceCardContent {...data} ishidden={ishidden} />
      </div>
   );
};

export default ServiceCard;
