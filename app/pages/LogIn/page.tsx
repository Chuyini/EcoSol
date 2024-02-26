import Form from '../../../components/organisms/Form/Form';

const INPUTS_FORM = [
   {
      label: 'Email *',
      type: 'email',
      name: 'email',
      placeholder: 'ejemplo@gmail.com',
   },
   {
      label: 'Contraseña *',
      type: 'password',
      name: 'password',
   },
];

const URL = {
   url: '/pages/SignUp',
   name: 'Créala Aquí',
};

export default function Home() {
   return (
      <main className='flex min-h-screen w-full flex-col items-center justify-between bg-white font-serif text-black'>
         <Form
            inputs={INPUTS_FORM}
            bottomText='¿No tienes cuenta?'
            bottomUrl={URL}
         />
      </main>
   );
}
