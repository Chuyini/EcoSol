import Link from 'next/link';
import { FunctionComponent, ReactNode } from 'react';

interface Route {
   name: string;
   url: string;
}

export interface UsContentProps {
   icon: ReactNode;
   title: string;
   body: string;
   route: Route;
}

const UsContent: FunctionComponent<UsContentProps> = ({
   icon,
   title,
   body,
   route,
}) => {
   return (
      <div className='flex w-full  flex-col bg-white p-4 font-serif text-black lg:w-2/3'>
         {icon}
         <h2 className='mx-auto my-4 text-2xl font-semibold lg:mx-0'>
            {title}
         </h2>
         <p className='my-4 text-center lg:text-left'>{body}</p>
         <Link
            href={route.url}
            className='mx-auto my-4 flex w-1/2 items-center justify-center rounded-full bg-secondary-1 px-4 py-2 font-semibold text-white lg:mx-0 lg:w-1/3'
         >
            {route.name}
         </Link>
      </div>
   );
};

export default UsContent;
