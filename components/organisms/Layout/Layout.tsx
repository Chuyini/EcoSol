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
import EmailIcon from '../../atoms/icons/Email';
import LocationIcon from '../../atoms/icons/Location';

const NAVIGATION_ROUTES = [
   { name: 'Inicio', url: '/' },
   { name: 'Nosotros', url: '/#Us' },
   { name: 'Servicios', url: '/#Services' },
];

const LOG_BUTTONS = [
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

const FOOTER_DATA_ELEMENTS = [
   {
      name: 'Mail',
      body: 'info.ecosol@gmail.com',
      icon: <EmailIcon className='h-6 w-6' />,
      url: 'mailto:info.ecosol@gmail.com',
   },
   {
      name: 'Ubicación',
      body: 'San Luis Potosí, S. L. P.',
      icon: <LocationIcon className='h-6 w-6' />,
      url: 'https://www.google.com.mx/maps/place/San+Luis+Potos',
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
                  navigationButtons={NAVIGATION_ROUTES}
                  token={token}
                  userButtons={LOG_BUTTONS}
                  displayMenuIcons={MENU_BUTTON_ICONS}
                  displayNotificationsIcons={NOTIFICATIONS_BUTTON_ICONS}
                  notifications={NOTIFICATIONS}
                  userData={userData}
               />
               {children}
               <Footer
                  navigationButtons={NAVIGATION_ROUTES}
                  dataElements={FOOTER_DATA_ELEMENTS}
                  message='Bienvenido a EcoSol tu punto de contacto sustentable'
                  copyright='© EcoSol 2024. All Rights Reserved.'
               />
            </>
         )}
         {!showChild && (
            <Loading className='m-auto mt-32 flex h-96 w-96 border-8 border-primary-1 text-primary-1' />
         )}
      </>
   );
};

export default Layout;
