import { FunctionComponent } from 'react';

export interface FormInputProps {
   label: string;
   type: string;
   name: string;
   placeholder?: string;
}

const FormInput: FunctionComponent<FormInputProps> = ({
   label,
   type,
   placeholder,
   name,
}) => {
   return (
      <div className='flex flex-col p-2'>
         <label
            htmlFor={name}
            className='py-4 font-serif text-xl font-semibold text-black'
         >
            {label}
         </label>
         <input
            className='rounded-lg border border-gray-800 p-2 py-4 font-serif text-xl text-black focus-visible:outline-none'
            type={type}
            placeholder={placeholder}
            id={name}
            name={name}
         />
      </div>
   );
};

export default FormInput;
