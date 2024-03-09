import { FunctionComponent, HtmlHTMLAttributes } from 'react';
import Link from 'next/link';

export interface Route {
   name: string;
   url: string;
}

interface NavigationProps extends HtmlHTMLAttributes<HTMLDivElement> {
   buttons: Route[];
   variant: 'navbar' | 'footer';
}

const VARIANTS = {
   navbar: {
      container: 'flex w-full flex-col lg:ml-20 lg:mr-auto lg:w-96 lg:flex-row',
      link: 'transition-color colo mx-auto my-2 flex w-10/12 p-2 text-black duration-300 ease-in-out hover:bg-gray-200 lg:w-20 lg:justify-center lg:p-0 lg:hover:bg-transparent',
   },
   footer: {
      container: 'my-4 hidden w-1/4 flex-col  text-center lg:flex',
      link: 'transition-color text-sm my-2 mx-auto flex font-serif text-white lg:justify-center ',
   },
};

const Navigation: FunctionComponent<NavigationProps> = ({
   buttons,
   variant,
}) => {
   return (
      <div className={VARIANTS[variant].container}>
         {variant === 'footer' && (
            <h2 className='mb-2 text-xl text-white'>Explora</h2>
         )}
         {buttons.map((button) => (
            <Link
               href={button.url}
               key={button.url}
               className={VARIANTS[variant].link}
            >
               {button.name}
            </Link>
         ))}
      </div>
   );
};

export default Navigation;
