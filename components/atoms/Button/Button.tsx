import { FunctionComponent, HtmlHTMLAttributes } from 'react';

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
   variant: 'primary' | 'secondary' | 'danger';
   border: 'rounded' | 'none';
}

const BUTTON_CLASSES = {
   primary: 'bg-primary-1 text-white hover:bg-sky-600 ',
   secondary: 'bg-gray-300 text-black hover:bg-gray-400',
   danger: 'bg-red-500 text-white',
   rounded: 'rounded-full',
   none: 'rounded-sm',
};

const Button: FunctionComponent<ButtonProps> = ({
   variant,
   border,
   children,
   className,
   ...rest
}) => {
   const btnClasses =
      'font-serif px-4 py-2 flex text-center items-center justify-center transition-colors duration-300 ease-in-out ' +
      BUTTON_CLASSES[variant] +
      ' ' +
      BUTTON_CLASSES[border] +
      ' ' +
      className;

   return (
      <button {...rest} className={btnClasses}>
         {children}
      </button>
   );
};

export default Button;
