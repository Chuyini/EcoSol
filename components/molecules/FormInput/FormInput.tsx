import {
   ChangeEvent,
   FunctionComponent,
   HtmlHTMLAttributes,
   useState,
} from 'react';
import ButtonPassword from '../../atoms/ButtonPassword/ButtonPassword';

export interface InputValues {
   label: string;
   type: string;
   name: string;
   placeholder?: string;
   allows: 'letter' | 'number' | 'string';
}

interface FormInputProps extends HtmlHTMLAttributes<HTMLInputElement> {
   values: InputValues;
   handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const REGEX = {
   letter: /^[a-zA-Z\u00C0-\u024F\s]*$/u,
   number: /^[0-9]*$/,
   string: undefined,
};

const FormInput: FunctionComponent<FormInputProps> = ({
   values,
   handleChange,
   ...rest
}) => {
   const [previousValue, setPreviousValue] = useState('');
   const [showPassword, setShowPassword] = useState(false);

   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      const regex = REGEX[values.allows];

      if (regex && !regex.test(value)) {
         event.target.value = previousValue;
         return;
      }
      setPreviousValue(value);
      handleChange(event);
   };

   return (
      <div className='flex flex-col p-2'>
         <label
            htmlFor={values.name}
            className='py-4 font-serif text-xl font-semibold text-black'
         >
            {values.label}
         </label>
         <div className='flex w-full '>
            <input
               className={
                  (values.type === 'password'
                     ? 'rounded-l-lg '
                     : 'rounded-lg ') +
                  'w-full  border border-gray-800 p-2 py-4 font-serif text-xl text-black focus-visible:outline-none'
               }
               type={
                  values.type === 'password' && showPassword
                     ? 'text'
                     : values.type
               }
               placeholder={values.placeholder}
               id={values.name}
               name={values.name}
               onChange={handleInputChange}
               {...rest}
            />
            {values.type === 'password' && (
               <ButtonPassword
                  isPasswordVisible={showPassword}
                  showPassword={() => setShowPassword(!showPassword)}
                  className='group flex w-16 items-center justify-center rounded-r-lg bg-sky-500  text-white  transition-opacity duration-300 ease-in-out hover:bg-sky-600 '
               />
            )}
         </div>
      </div>
   );
};

export default FormInput;
