'use client';
import { FunctionComponent, HtmlHTMLAttributes, useState } from 'react';
import Navigation, { Route } from '../../molecules/Navigation/Navigation';
import FooterEcoSolInfo from '../../molecules/FooterEcoSolInfo/FooterEcoSolInfo';
import EcoSol from '../../atoms/icons/EcoSol';
import FooterLogoText from '../../molecules/FooterLogoText/FooterLogoText';
import NavigationFooter, { RouteFooter } from '../../molecules/NavigationFooter/NavigationFooter';

interface FooterProps extends HtmlHTMLAttributes<HTMLDivElement> {
    navigationButtons: Route[];
    color: string;   
}

const Footer: FunctionComponent<FooterProps> = ({
    navigationButtons,
}) => {
    return (
        <footer className='flex flex-col items-center justify-center w-full h-42 bg-primary-1 text-white'>
            <div className="flex flex-col sm:flex-row justify-between w-full">
                <div className="w-full sm:w-1/3 flex items-center pl-20">
                    <FooterLogoText/>
                </div>
                <div className=" w-1/3 flex flex-col items-center text-black justify-center lg:block">
                    <NavigationFooter buttons={navigationButtons} />
                </div>
                <div className="w-full sm:w-1/3 flex items-center pr-20 py-5 justify-center ">
                    <FooterEcoSolInfo />
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;
