import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';
import EyeIcon from '../icons/Eye';
import EyeSlashIcon from '../icons/EyeSlash';

interface ButtonPasswordProps extends HtmlHTMLAttributes<HTMLButtonElement> {
   isPasswordVisible: boolean;
   showPassword: (value: boolean) => void;
}

const ButtonPassword: FunctionComponent<ButtonPasswordProps> = ({
   isPasswordVisible,
   showPassword,
   ...rest
}) => {
   const handleClick = () => {
      showPassword(!isPasswordVisible);
   };

   return (
      <button {...rest} onClick={handleClick} type='button'>
         {isPasswordVisible ? (
            <EyeIcon className='h-6 w-6 ' />
         ) : (
            <EyeSlashIcon className='h-6 w-6 ' />
         )}
      </button>
   );
};

export default ButtonPassword;
