'use client';
import { FunctionComponent, HtmlHTMLAttributes, useState } from 'react';
import Navigation, { Route } from '../../molecules/Navigation/Navigation';
import Logo from '../../atoms/Logo/Logo';
import UserMenu from '../../molecules/UserMenu/UserMenu';
import DisplayButton, { Icons } from '../../atoms/DisplayButton/DisplayButton';
import UserButtons, {
   UserButton,
} from '../../molecules/UserButtons/UserButtons';
import CollapsableMenu, {
   MenuRoute,
} from '../../molecules/CollapsableMenu/CollapsableMenu';

interface NavBarProps extends HtmlHTMLAttributes<HTMLDivElement> {
   navigationButtons: Route[];
   userButtons: UserButton[];
   token: string;
   setToken: (token: string) => void;
   displayMenuIcons: Icons;
   displayNotificationsIcons: Icons;
   notifications: MenuRoute[];
}

const NavBar: FunctionComponent<NavBarProps> = ({
   navigationButtons,
   userButtons,
   token,
   setToken,
   displayMenuIcons,
   displayNotificationsIcons,
   notifications,
}) => {
   const [isNavigationOpen, setIsNavigationOpen] = useState(false);
   const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const showMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      setIsNavigationOpen(false);
      setIsNotificationsOpen(false);
   };

   const showNotifications = () => {
      setIsMenuOpen(false);
      setIsNotificationsOpen(!isNotificationsOpen);
      setIsNavigationOpen(false);
   };

   const showNavigation = () => {
      setIsMenuOpen(false);
      setIsNavigationOpen(!isNavigationOpen);
      setIsNotificationsOpen(false);
   };

   return (
      <nav className=' flex h-20 w-full items-center justify-between border bg-white font-serif'>
         <Logo />

         <div className='relative flex h-full w-full items-center '>
            <div
               className={
                  (isNavigationOpen ? 'scale-y-100  ' : 'scale-y-0  ') +
                  ' absolute right-0 top-16 flex w-screen origin-top flex-col border-b-4 border-b-primary-1 bg-white  p-0 transition-transform duration-300 ease-in-out lg:relative lg:top-0 lg:ml-8 lg:mr-auto lg:h-full lg:w-full lg:scale-y-100 lg:flex-row lg:items-center lg:border-0 lg:bg-transparent'
               }
            >
               <Navigation buttons={navigationButtons} />

               {!token && <UserButtons buttons={userButtons} />}
               {token && (
                  <UserMenu
                     isMenuOpen={isMenuOpen}
                     token={token}
                     setToken={setToken}
                     handleShow={showMenu}
                  />
               )}
            </div>

            {token && (
               <>
                  <DisplayButton
                     isShowing={isNotificationsOpen}
                     variant='transparent'
                     icons={displayNotificationsIcons}
                     className='  absolute right-20 lg:right-32'
                     onClick={showNotifications}
                  />
                  <CollapsableMenu
                     routes={notifications}
                     className={
                        (isNotificationsOpen
                           ? 'scale-y-100  '
                           : 'scale-y-0  ') +
                        'absolute right-0 top-20 flex w-2/3 origin-top flex-col justify-start border-2 py-4 transition-transform duration-300 ease-in-out lg:right-4  lg:w-1/3  '
                     }
                  />
               </>
            )}

            <DisplayButton
               isShowing={isNavigationOpen}
               variant='transparent'
               icons={displayMenuIcons}
               className='ml-auto mr-8 lg:hidden'
               onClick={showNavigation}
            />
         </div>
      </nav>
   );
};

export default NavBar;
