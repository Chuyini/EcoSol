import { FunctionComponent } from 'react';
import EcoSolIcon from '../icons/EcoSol';
import Link from 'next/link';

const Logo: FunctionComponent = ({}) => {
   return (
      <Link href={'/'} className='mx-8 my-auto flex items-center '>
         <EcoSolIcon className='h-12 w-12  text-primary-1' />
         <span className='hidden font-serif text-3xl text-black lg:block'>
            EcoSol
         </span>
      </Link>
   );
};

export default Logo;
