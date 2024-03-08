'use client';
import {
   FunctionComponent,
   PropsWithChildren,
   useEffect,
   useState,
} from 'react';
import Cookies from 'js-cookie';
import NavBar from '../NavBar/NavBar';
import Loading from '../../atoms/Loading/Loading';
import BarsIcon from '../../atoms/icons/Bars';
import CloseIcon from '../../atoms/icons/Close';
import BellFilledIcon from '../../atoms/icons/BellFilled';
import BellIcon from '../../atoms/icons/Bell';
import Footer from '../Footer/Footer';

const NavLinks = [
   { name: 'Inicio', url: '/' },
   { name: 'Nosotros', url: '/pages/Us' },
   { name: 'Servicios', url: 'pages/Services' },
];

const UserLogButtons = [
   { name: 'Registrate', url: '/pages/SignUp', variant: 'secondary' as const },
   { name: 'Ingresa', url: '/pages/LogIn', variant: 'primary' as const },
];

const MENU_BUTTON_ICONS = {
   show: <BarsIcon className='h-8 w-8' />,
   hide: <CloseIcon className='h-8 w-8' />,
};

const NOTIFICATIONS_BUTTON_ICONS = {
   show: <BellIcon className='h-8 w-8' />,
   hide: <BellFilledIcon className='h-8 w-8' />,
};

const NOTIFICATIONS = [
   {
      url: '/notifications',
      name: 'Notification1',
      isNameVisible: true,
      icon: <BellFilledIcon className='mr-2 h-8 w-8' />,
   },
   {
      url: '/notification s',
      name: 'Notification 2',
      isNameVisible: true,
      icon: <BellFilledIcon className='h-8 w-8' />,
   },
];

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
   const [showChild, setShowChild] = useState(false);
   const [token, setToken] = useState('');
   const [userData, setUserData] = useState({});
   const cookieToken = Cookies.get('token');

   async function fetchData() {
      try {
         const response = await fetch(`api/user/${token}`, {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json',
            },
         });
         const data = await response.json();
         setUserData(data.data);
      } catch (error) {
         console.log('error', error);
      } finally {
         setShowChild(true);
      }
   }

   useEffect(() => {
      if (cookieToken) {
         setToken(JSON.parse(atob(cookieToken.split('.')[1])).email);
      } else {
         setUserData({});
         setShowChild(true);
      }
   }, [cookieToken]);

   useEffect(() => {
      if (token) fetchData();
   }, [token]);

   return (
      <>
         {showChild && (
            <>
               <NavBar
                  setToken={setToken}
                  navigationButtons={NavLinks}
                  token={token}
                  userButtons={UserLogButtons}
                  displayMenuIcons={MENU_BUTTON_ICONS}
                  displayNotificationsIcons={NOTIFICATIONS_BUTTON_ICONS}
                  notifications={NOTIFICATIONS}
                  userData={userData}
               />
               {children}
            </>
         )}
         {!showChild && (
            <Loading className='m-auto mt-32 flex h-96 w-96 border-8 border-primary-1 text-primary-1' />
         )}
         <Footer
            navigationButtons={NavLinks}
         />
      </>
   );
};

export default Layout;
