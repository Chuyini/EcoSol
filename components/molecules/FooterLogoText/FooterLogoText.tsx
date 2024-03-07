import { FunctionComponent, HtmlHTMLAttributes } from 'react';
import Link from 'next/link';
import Email from '../../atoms/icons/Email';
import Location from '../../atoms/icons/Location';
import EcoSol from '../../atoms/icons/EcoSol';

interface FooterLogoTextProps extends HtmlHTMLAttributes<HTMLDivElement> {
   
}

const FooterEcoSolInfo: FunctionComponent<FooterLogoTextProps> = ({  }) => {
    return (
        <div className='    '>
            <div className='flex'>
                <EcoSol className='h-12 w-12'/>
                <span className=' font-serif text-3xl text-white '>
                    EcoSol
                </span>
            </div>

            <div>
                <span>
                Bienvenido a EcoSol tu punto de 
                <br />contacto sustentable
                </span>
            </div>
        </div>
    );
};

export default FooterEcoSolInfo;
