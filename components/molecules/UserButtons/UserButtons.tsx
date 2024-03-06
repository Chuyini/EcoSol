import { FunctionComponent, HtmlHTMLAttributes } from 'react';
import Link from 'next/link';

export interface UserButton {
   name: string;
   url: string;
   variant: 'primary' | 'secondary';
}

interface UserButtonsProps extends HtmlHTMLAttributes<HTMLDivElement> {
   buttons: UserButton[];
}

const VARIANTS = {
   primary: 'bg-primary-1 hover:bg-sky-600 ',
   secondary: 'bg-primary-2 hover:bg-sky-500',
};

const UserButtons: FunctionComponent<UserButtonsProps> = ({ buttons }) => {
   const btnClass =
      'font-serif px-4 m-auto py-2 flex text-center w-28 h-12  lg:m-auto  rounded-full items-center justify-center transition-colors duration-300 ease-in-out text-white ';
   return (
      <div className='  my-8 flex h-auto origin-top items-center justify-between lg:my-auto lg:ml-auto lg:mr-8 lg:w-72   '>
         {buttons.map((button) => {
            const variant = VARIANTS[button.variant] + ' ';
            return (
               <Link
                  href={button.url}
                  key={button.url}
                  className={btnClass + variant}
               >
                  {button.name}
               </Link>
            );
         })}
      </div>
   );
};

export default UserButtons;
