import { FunctionComponent, HtmlHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

export interface MenuRoute {
   url: string;
   name: string;
   isNameVisible?: boolean;
   icon?: ReactNode;
}

interface CollapsableMenuProps extends HtmlHTMLAttributes<HTMLDivElement> {
   routes: MenuRoute[];
}

const CollapsableMenu: FunctionComponent<CollapsableMenuProps> = ({
   routes,
   className,
   ...rest
}) => {
   return (
      <div
         className={
            className +
            'absolute z-50 flex flex-col items-center bg-white  text-black'
         }
         {...rest}
      >
         {routes.map((route) => (
            <Link
               href={route.name}
               className='flex w-full border-b p-4 hover:bg-gray-200'
               key={route.name}
            >
               {route.icon && route.icon}
               {route.isNameVisible && route.name}
            </Link>
         ))}
      </div>
   );
};

export default CollapsableMenu;
