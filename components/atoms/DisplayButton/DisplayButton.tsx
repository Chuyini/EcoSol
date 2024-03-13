import { FunctionComponent, HtmlHTMLAttributes, ReactNode } from 'react';

export interface Icons {
   show: ReactNode;
   hide: ReactNode;
}

interface DisplayButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
   isShowing: boolean;
   icons: Icons;
   variant: 'primary' | 'transparent';
}

const VARIANTS = {
   primary:
      'bg-primary-1 text-white transition-color duration-300 ease-in-out hover:bg-sky-600',
   transparent: 'bg-transparent text-gray-600',
};

const DisplayButton: FunctionComponent<DisplayButtonProps> = ({
   isShowing,
   className,
   icons,
   variant,
   ...rest
}) => {
   const btnClass =
      'rounded-lg flex items-center justify-center ' + VARIANTS[variant];
   return (
      <button className={className + ' ' + btnClass} {...rest} type='button'>
         {isShowing ? icons.hide : icons.show}
      </button>
   );
};

export default DisplayButton;
