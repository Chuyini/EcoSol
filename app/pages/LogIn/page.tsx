'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Form from '../../../components/organisms/Form/Form';

const INPUTS_FORM = [
   {
      label: 'Email *',
      type: 'text',
      name: 'email',
      placeholder: 'ejemplo@gmail.com',
      allows: 'string' as const,
   },
   {
      label: 'Contraseña *',
      type: 'password',
      name: 'password',
      allows: 'string' as const,
   },
];

const BOTTOM_MESSAGE = {
   message: '¿No tienes cuenta?',
   route: {
      url: '/pages/SignUp',
      name: 'Créala Aquí',
   },
};

const ERROR_MESSAGES = {
   password: 'El campo es requerido',
   wrongPassword: 'Email o contraseña incorrectos',
   email: 'El email no es válido',
};

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export default function Home() {
   const [loading, setLoading] = useState(false);
   const router = useRouter();

   const handleValidate = (data) => {
      const validationErrors = {} as any;

      if (!data.email || !data.email.match(EMAIL_REGEX))
         validationErrors.email = ERROR_MESSAGES.email;
      else delete validationErrors.email;

      if (!data.password) {
         validationErrors.password = ERROR_MESSAGES.password;
      } else validationErrors.password = ERROR_MESSAGES.wrongPassword;

      return validationErrors;
   };

   const handleSubmit = async (formData) => {
      try {
         setLoading(true);
         const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
         });
         const data = await response.json();
         const token = data.token;
         if (token) {
            localStorage.setItem('token', token);
            router.push('/');
            router.refresh();
         } else {
            const validationErrors = handleValidate(formData);
            return validationErrors;
         }
      } catch (error) {
         console.error(error);
      } finally {
         setLoading(false);
      }
   };

   return (
      <main className='flex min-h-screen w-full flex-col items-center justify-between bg-white font-serif text-black'>
         <Form
            inputs={INPUTS_FORM}
            bottomMessage={BOTTOM_MESSAGE}
            onSubmit={handleSubmit}
            isLoading={loading}
         />
      </main>
   );
}
