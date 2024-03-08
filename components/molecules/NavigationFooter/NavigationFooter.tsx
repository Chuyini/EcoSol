import { FunctionComponent, HtmlHTMLAttributes } from 'react';
import Link from 'next/link';

export interface RouteFooter {
    name: string;
    url: string;
}

interface NavigationFooterProps extends HtmlHTMLAttributes<HTMLDivElement> {
    buttons: RouteFooter[];
}

const NavigationFooter: FunctionComponent<NavigationFooterProps> = ({ buttons, color }) => {
    return (
        <div className='lg:flex w-full flex-col my-4 hidden'>
            <span className='text-center font-serif text-2xl text-white'>Links</span>
            {buttons.map((button) => (
                <Link
                    href={button.url}
                    key={button.url}
                    className='transition-color  font-serif text-1xl text-white mx-auto my-2 flex w-10/12 p-2 colo duration-300 ease-in-out hover:bg-gray-200 lg:w-20 lg:justify-center lg:p-0 lg:hover:bg-transparent'
                >
                    {button.name}
                </Link>
            ))}
        </div>
    );
};

export default NavigationFooter;
