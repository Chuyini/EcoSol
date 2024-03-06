import { FunctionComponent, HtmlHTMLAttributes } from 'react';
import Link from 'next/link';

export interface Route {
   name: string;
   url: string;
}

interface NavigationProps extends HtmlHTMLAttributes<HTMLDivElement> {
   buttons: Route[];
}

const Navigation: FunctionComponent<NavigationProps> = ({ buttons }) => {
   return (
      <div className=' flex w-full flex-col lg:ml-20 lg:mr-auto lg:w-96 lg:flex-row   '>
         {buttons.map((button) => (
            <Link
               href={button.url}
               key={button.url}
               className='transition-color mx-auto my-2 flex w-10/12 p-2 text-black duration-300 ease-in-out hover:bg-gray-200 lg:w-20 lg:justify-center lg:p-0 lg:hover:bg-transparent'
            >
               {button.name}
            </Link>
         ))}
      </div>
   );
};

export default Navigation;
