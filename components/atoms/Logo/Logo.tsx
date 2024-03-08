import { FunctionComponent } from 'react';
import EcoSolIcon from '../icons/EcoSol';
import Link from 'next/link';

interface LogoProps {
   logoColor: string;
   textColor: string;
}

const Logo: FunctionComponent<LogoProps> = ({logoColor, textColor}) => {
   return (
      <Link href={'/'} className='mx-8 my-auto flex items-center '>
         <EcoSolIcon className={'h-12 w-12 ' +logoColor} />
         <span className={'hidden font-serif text-3xl lg:block '+textColor}>
            EcoSol
         </span>
      </Link>
   );
};

export default Logo;
