import { FunctionComponent, useState } from 'react';
import Link from 'next/link';
import Button from '../../atoms/Button/Button';
import Avatar from '../../atoms/Avatar/Avatar';
import GearIcon from '../../atoms/icons/Gear';
import RightFromBracketIcon from '../../atoms/icons/RightFromBracket';
import { useRouter } from 'next/navigation';
import DisplayButton from '../../atoms/DisplayButton/DisplayButton';
import ChevronDownIcon from '../../atoms/icons/ChevronDown';
import ChevronUpIcon from '../../atoms/icons/ChevronUp';
import Cookies from 'js-cookie';

interface UserMenu {
   token: string;
   isMenuOpen: boolean;
   setToken: (token: string) => void;
   handleShow: () => void;
}

const BUTTON_ICONS = {
   show: <ChevronDownIcon className='h-6 w-6' />,
   hide: <ChevronUpIcon className='h-6 w-6' />,
};

const UserMenu: FunctionComponent<UserMenu> = ({
   token,
   setToken,
   handleShow,
   isMenuOpen,
}) => {
   const router = useRouter();

   const show = () => {
      handleShow();
   };

   const logOut = () => {
      setToken('');
      handleShow();
      Cookies.remove('token');
      router.push('/');
      router.refresh();
   };

   const btnClass =
      ' text-gray-500 lg:w-full lg:p-4 lg:justify-start flex lg:border-b-2 lg:hover:bg-gray-200';
   const iconClass = 'h-8 w-8';

   return (
      <div className='m-auto my-4 flex w-10/12 items-center  lg:absolute lg:left-auto lg:right-0 lg:m-0 lg:w-1/4 lg:justify-end '>
         <Avatar userId={token} picture='/Card1.png' className='mr-4 lg:m-0' />
         <DisplayButton
            isShowing={isMenuOpen}
            onClick={show}
            variant='transparent'
            className='hidden lg:mr-8 lg:flex'
            icons={BUTTON_ICONS}
         />
         <h1 className='text-black lg:hidden'>Name</h1>
         <div
            className={
               (isMenuOpen ? ' lg:scale-y-100 ' : ' lg:scale-y-0 ') +
               'ml-auto flex w-1/4 origin-top items-center justify-between transition-transform duration-300 ease-in-out lg:absolute lg:top-16 lg:w-full lg:flex-col lg:border-2 lg:bg-white lg:py-8'
            }
         >
            <Link
               href={'/pages/Profile/Settings/' + token}
               className={btnClass}
            >
               <GearIcon className={iconClass} />
               <span className='my-auto ml-4 hidden lg:flex'>
                  Configuración
               </span>
            </Link>
            <Button
               variant='transparent'
               className={btnClass}
               border='none'
               onClick={logOut}
            >
               <RightFromBracketIcon className={iconClass} />
               <span className='my-auto ml-4 hidden lg:flex'>
                  Cerrar Sesión
               </span>
            </Button>
         </div>
      </div>
   );
};

export default UserMenu;
