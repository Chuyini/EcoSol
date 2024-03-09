import { FunctionComponent, HtmlHTMLAttributes } from 'react';
import EcoSolIcon from '../icons/EcoSol';
import Link from 'next/link';

interface LogoProps extends HtmlHTMLAttributes<HTMLDivElement> {
   variant: 'primary' | 'secondary';
}

const VARIANTS = {
   primary: { text: ' text-black hidden', icon: 'text-primary-1 ' },
   secondary: { text: ' text-white flex ', icon: 'text-white ' },
};

const Logo: FunctionComponent<LogoProps> = ({ variant, className }) => {
   return (
      <Link href={'/'} className={' my-auto flex items-center ' + className}>
         <EcoSolIcon className={'h-12 w-12 ' + VARIANTS[variant].icon} />
         <span
            className={
               ' font-serif text-3xl lg:block ' + VARIANTS[variant].text
            }
         >
            EcoSol
         </span>
      </Link>
   );
};

export default Logo;
