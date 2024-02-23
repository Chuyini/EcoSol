import { FunctionComponent, HtmlHTMLAttributes } from 'react';
import Button from '../../atoms/Button/Button';
import FormInput, { FormInputProps } from '../../molecules/FormInput/FormInput';
import Link from 'next/link';

interface URL {
   url: string;
   name: string;
}

interface FormProps extends HtmlHTMLAttributes<HTMLFormElement> {
   inputs: FormInputProps[];
   bottomText?: string;
   bottomUrl?: URL;
}

const Form: FunctionComponent<FormProps> = ({
   inputs,
   bottomText,
   bottomUrl,
}) => {
   return (
      <form
         action=''
         className='m-auto my-12 flex w-11/12 flex-col bg-white lg:w-1/2'
      >
         {inputs.map((input) => (
            <FormInput {...input} key={input.name} />
         ))}

         {bottomText && bottomUrl && (
            <div className='my-4 ml-auto mr-2 flex text-lg'>
               {bottomText}{' '}
               <Link
                  className='ml-2 text-sky-500 hover:text-sky-600'
                  href={bottomUrl?.url}
               >
                  {bottomUrl?.name}
               </Link>
            </div>
         )}

         <Button
            className='m-auto mt-8 h-16 w-1/2 text-3xl'
            variant='primary'
            border='rounded'
            typeof='submit'
         >
            Enviar
         </Button>
      </form>
   );
};

export default Form;
