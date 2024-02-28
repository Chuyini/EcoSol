import Link from 'next/link';
import { FunctionComponent, HtmlHTMLAttributes } from 'react';

interface Route {
   url: string;
   name: string;
}

export interface FormBottomProps extends HtmlHTMLAttributes<HTMLInputElement> {
   route: Route;
   message: string;
}

const FormBottom: FunctionComponent<FormBottomProps> = ({ route, message }) => {
   return (
      <div className='my-4 ml-auto mr-2 flex text-lg'>
         {message}{' '}
         <Link
            className='ml-2 text-sky-500 hover:text-sky-600'
            href={route.url}
         >
            {route.name}
         </Link>
      </div>
   );
};

export default FormBottom;
