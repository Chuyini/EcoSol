import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

interface CarrouselButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
   isActive: boolean;
}

const CarrouselButton: FunctionComponent<CarrouselButtonProps> = ({
   isActive,
   ...rest
}) => {
   return (
      <button
         {...rest}
         className={
            (isActive ? 'bg-primary-1 ' : ' bg-secondary-1 ') +
            'h-4 w-4 rounded-full'
         }
         type='button'
      />
   );
};

export default CarrouselButton;
