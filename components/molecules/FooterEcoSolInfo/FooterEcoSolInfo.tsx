import { FunctionComponent, HtmlHTMLAttributes } from 'react';
import Link from 'next/link';
import Email from '../../atoms/icons/Email';
import Location from '../../atoms/icons/Location';

interface FooterEcoSolInfoProps extends HtmlHTMLAttributes<HTMLDivElement> {
   
}

const FooterEcoSolInfo: FunctionComponent<FooterEcoSolInfoProps> = ({  }) => {
    return (
        <div className='flex-col items-center justify-start'>
            <div className='flex'>
                <div className='w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center'>
                    <Email className='h-6 w-6 text-white' />
                </div>
                <div className=" top-0 left-16 ml-2 text-black">
                    <p className=' font-serif text-2xl text-white'>Email</p>
                    <a href="mailto:infoecosol@gmail.com"><p className='font-serif text-1xl text-white'>infoecosol@gmail.com</p></a>
                </div>
            </div>

            <div className='flex my-4 '>
                <div className='w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center'>
                    <Location className='h-6 w-6' />
                </div>
                <div className=" top-0 left-16 ml-2 text-white">
                    <p className=' font-serif text-2xl text-white'>Ubicacion</p>
                    <p className='font-serif text-1xl text-white'>San Luis Potosí. S.L.P.</p>
                </div>
            </div>

            <div className="text-white text-right mt-4 mr-4 text-xs">© EcoSol 2024, All Rights Reserved </div>
            
        </div>
    );
};

export default FooterEcoSolInfo;
