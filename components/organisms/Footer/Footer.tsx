'use client';
import { FunctionComponent, HtmlHTMLAttributes, useState } from 'react';
import Navigation, { Route } from '../../molecules/Navigation/Navigation';
import FooterEcoSolInfo from '../../molecules/FooterEcoSolInfo/FooterEcoSolInfo';
import EcoSol from '../../atoms/icons/EcoSol';
import FooterLogoText from '../../molecules/FooterLogoText/FooterLogoText';

interface FooterProps extends HtmlHTMLAttributes<HTMLDivElement> {
    navigationButtons: Route[];   
}

const Footer: FunctionComponent<FooterProps> = ({
    navigationButtons,
}) => {
    return (
        <footer className='flex flex-col items-center justify-center w-full h-42 bg-primary-1 text-white'>
            <div className="flex justify-between w-full">
                <div className="w-1/3 flex items-center pl-20">
                    <FooterLogoText/>
                </div>
                <div className="w-1/3 flex flex-col items-center justify-center">
                    <h1 className=''>Links</h1>
                    <Navigation buttons={navigationButtons} className='lg:text-white' />
                </div>
                <div className="w-1/3 flex items-center pr-20 justify-center">
                    {/* Contenido de la columna de la derecha */}
                    <FooterEcoSolInfo />
                </div>
            </div>
        </footer>



    );
};

export default Footer;
