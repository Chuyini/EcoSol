import { FunctionComponent, HtmlHTMLAttributes } from 'react';
import Link from 'next/link';
import Email from '../../atoms/icons/Email';
import Location from '../../atoms/icons/Location';
import EcoSol from '../../atoms/icons/EcoSol';
import Logo from '../../atoms/Logo/Logo';

interface FooterLogoTextProps extends HtmlHTMLAttributes<HTMLDivElement> {
   
}

const FooterEcoSolInfo: FunctionComponent<FooterLogoTextProps> = ({  }) => {
    return (
        <div className='flex flex-col justify-start my-4'>
            <Logo logoColor='text-white' textColor='text-white'/>

          
          <div className='w-1/2 mt-2 mx-8' >
            Bienvenido a EcoSol tu punto de contacto sustentable
            </div>
            
        </div>
    );
};

export default FooterEcoSolInfo;
