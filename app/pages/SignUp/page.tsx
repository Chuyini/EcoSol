import Form from '../../../components/organisms/Form/Form';

const INPUTS_FORM = [
   {
      label: 'Nombre *',
      type: 'text',
      name: 'name',
      placeholder: 'Inserta tu nombre',
   },
   {
      label: 'Apellido Paterno *',
      type: 'text',
      name: 'firstLastName',
      placeholder: 'Inserta tu apellido paterno',
   },
   {
      label: 'Apellido Materno *',
      type: 'text',
      name: 'secondLastName',
      placeholder: 'Inserta tu apellido materno',
   },
   {
      label: 'Email *',
      type: 'email',
      name: 'email',
      placeholder: 'ejemplo@gmail.com',
   },
   {
      label: 'Teléfono *',
      type: 'text',
      name: 'phone',
      placeholder: 'Inserta tu teléfono',
   },
   {
      label: 'Contraseña *',
      type: 'password',
      name: 'password',
   },
   {
      label: 'Confirmar Contraseña *',
      type: 'password',
      name: 'confirmPassword',
   },
   {
      label: 'Código Postal',
      type: 'text',
      name: 'postalCode',
      placeholder: 'X X X X X',
   },
];

const URL = {
   url: '/LogIn',
   name: 'Ingresa Aquí',
};

export default function Home() {
   return (
      <main className='flex min-h-screen w-full flex-col items-center justify-between bg-white font-serif text-black'>
         <div className='mt-9 w-11/12 text-center text-xl lg:w-1/3'>
            {' '}
            Para comenzar a adquirir productos y conocer gente de tu comunidad
            llena este formulario para poder crear tu cuenta de EcoSol
         </div>
         <Form
            inputs={INPUTS_FORM}
            bottomText='¿Ya tienes cuenta?'
            bottomUrl={URL}
         />
      </main>
   );
}
