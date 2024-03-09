'use client';
import { FunctionComponent, HtmlHTMLAttributes, ReactNode } from 'react';
import FooterInfo, { InfoElement } from '../../molecules/FooterInfo/FooterInfo';
import Navigation, { Route } from '../../molecules/Navigation/Navigation';
import Logo from '../../atoms/Logo/Logo';

interface FooterProps extends HtmlHTMLAttributes<HTMLDivElement> {
   navigationButtons: Route[];
   dataElements: InfoElement[];
   message: string;
   copyright: string;
}

const Footer: FunctionComponent<FooterProps> = ({
   navigationButtons,
   dataElements,
   message,
   copyright,
}) => {
   return (
      <footer className='flex  w-full flex-col  bg-primary-1 font-serif text-white'>
         <div className='mt-8 flex w-full flex-col items-center lg:flex-row'>
            <div className='mx-auto flex w-full flex-col items-center justify-center lg:w-1/4 lg:items-start  '>
               <Logo variant='secondary' />
               <p className='mt-2 w-1/2 text-center lg:w-2/3 lg:text-left'>
                  {message}
               </p>
            </div>
            <Navigation variant='footer' buttons={navigationButtons} />

            <FooterInfo dataElements={dataElements} />
         </div>
         <p className='mx-auto mb-2 mt-4 flex text-xs lg:ml-auto lg:mr-8'>
            {copyright}
         </p>
      </footer>
   );
};

export default Footer;
