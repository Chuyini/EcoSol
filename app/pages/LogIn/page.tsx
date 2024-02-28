'use client';
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

export default function Home() {
   return (
      <main className='flex min-h-screen w-full flex-col items-center justify-between bg-white font-serif text-black'>
         <Form
            inputs={INPUTS_FORM}
            bottomMessage={BOTTOM_MESSAGE}
            onSubmit={() => {}}
            onValidate={(formData: any) => formData}
         />
      </main>
   );
}
