import Link from 'next/link';
import { FunctionComponent, ReactNode } from 'react';
interface UsContentProps {
   icon: ReactNode;
   title: string;
   body: string;
   route: { name: string; url: string };
   imageSrc: string;
}

const UsContent: FunctionComponent<UsContentProps> = ({
   icon,
   title,
   body,
   route,
   imageSrc,
}) => {
   return (
      <div className='flex h-fit w-fit bg-white p-4 font-serif text-black'>
         <div className='mr-4 flex-shrink-0'>{icon}</div>
         <div className='w-1/2 flex-grow'>
            <h1 className='mb-2 text-2xl font-semibold'>{title}</h1>
            <p className='mb-4'>{body}</p>
            <Link
               href={route.url}
               className='inline-block rounded-full bg-sky-300 p-3 text-white'
            >
               {route.name}
            </Link>
         </div>
         <img src='UsImage.png' alt=' ' className='pl-3' />
      </div>
   );
};

export default UsContent;

/*{imageSrc && <img src={imageSrc} alt='Imagen' className='ml-4' />}*/
