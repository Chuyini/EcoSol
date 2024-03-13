import { FunctionComponent, HtmlHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

export interface InfoElement {
   name: string;
   url: string;
   icon: ReactNode;
   body: string;
}

interface FooterInfoProps extends HtmlHTMLAttributes<HTMLDivElement> {
   dataElements: InfoElement[];
}

const FooterInfo: FunctionComponent<FooterInfoProps> = ({ dataElements }) => {
   return (
      <div className='mx-auto my-4 w-full flex-col items-center justify-center lg:my-0 lg:w-1/4 '>
         {dataElements.map((element) => (
            <Link
               href={element.url}
               key={element.name}
               className=' mx-auto my-4 flex w-full items-center justify-center lg:w-full'
            >
               <div className='flex h-12 w-12 items-center justify-center rounded-full bg-secondary-1 text-white'>
                  {element.icon}
               </div>
               <div className='mx-4 flex flex-col'>
                  <h3 className='text-lg text-white lg:text-xl'>
                     {element.name}
                  </h3>
                  <p className='lg:text-md text-sm'>{element.body}</p>
               </div>
            </Link>
         ))}
      </div>
   );
};

export default FooterInfo;
