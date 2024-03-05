'use client';
import { FunctionComponent, HtmlHTMLAttributes, useState } from 'react';
import Button from '../../atoms/Button/Button';
import FormInput, { InputValues } from '../../molecules/FormInput/FormInput';
import FormBottom, {
   FormBottomProps,
} from '../../molecules/FormBottom/FormBottom';
import Loading from '../../atoms/Loading/Loading';

interface FormProps extends HtmlHTMLAttributes<HTMLFormElement> {
   inputs: InputValues[];
   bottomMessage?: FormBottomProps;
   onSubmit: (formData: any) => {};
   isLoading?: boolean;
}

const Form: FunctionComponent<FormProps> = ({
   isLoading,
   inputs,
   bottomMessage,
   onSubmit,
}) => {
   const initialFormData = inputs.reduce((acc, curr) => {
      acc[curr.name] = '';
      return acc;
   }, {});

   const [formData, setFormData] = useState(initialFormData);
   const [errors, setErrors] = useState({});

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setErrors({ ...errors, [e.target.name]: undefined });
   };

   const handleValidate = async (validationErrors: any) => {
      if (Object.keys(validationErrors).length > 0) {
         setErrors(validationErrors);
         return false;
      }
      return true;
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const validationErrors = await onSubmit(formData);
      if (validationErrors && !handleValidate(validationErrors)) return;
   };

   return (
      <form
         className='m-auto my-12 flex w-11/12 flex-col bg-white lg:w-1/2'
         onSubmit={handleSubmit}
      >
         {inputs.map((input) => (
            <div key={input.name} className='flex flex-col '>
               <FormInput
                  handleChange={handleChange}
                  values={input}
                  key={input.name}
               />
               {errors[input.name] && (
                  <span className='pl-2 text-sm text-red-500'>
                     {errors[input.name]}
                  </span>
               )}
            </div>
         ))}

         {bottomMessage && <FormBottom {...bottomMessage} />}

         <Button
            className='m-auto mt-8 h-16 w-1/2 text-3xl'
            variant='primary'
            border='rounded'
            typeof='submit'
         >
            {isLoading ? <Loading className='h-8 w-8 border-4 ' /> : 'Enviar'}
         </Button>
      </form>
   );
};

export default Form;
