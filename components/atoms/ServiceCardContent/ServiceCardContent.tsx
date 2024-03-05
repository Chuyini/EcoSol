import { FunctionComponent } from 'react';

export interface ServiceCardContentProps {
   title: string;
   body: string;
   ishidden?: boolean;
}

const ServiceCardContent: FunctionComponent<ServiceCardContentProps> = ({
   title,
   body,
   ishidden,
}) => {
   return (
      <div
         className={
            (ishidden ? 'hidden ' : 'flex ') +
            'bg-primary-1 absolute  top-64 h-48 w-52 flex-col items-center p-4 font-serif text-white lg:flex'
         }
      >
         <h2 className='my-4 text-lg font-semibold'>{title}</h2>
         <p className='mx-auto text-center'>{body}</p>
      </div>
   );
};

export default ServiceCardContent;
