'use client';
import Form from '../../../components/organisms/Form/Form';
import bcryptjs from 'bcryptjs';
import { useRouter } from 'next/navigation';

const INPUTS_FORM = [
   {
      label: 'Nombre *',
      type: 'text',
      name: 'name',
      placeholder: 'Inserta tu nombre',
      allows: 'letter' as const,
   },
   {
      label: 'Apellido Paterno *',
      type: 'text',
      name: 'firstLastName',
      placeholder: 'Inserta tu apellido paterno',
      allows: 'letter' as const,
   },
   {
      label: 'Apellido Materno *',
      type: 'text',
      name: 'secondLastName',
      placeholder: 'Inserta tu apellido materno',
      allows: 'letter' as const,
   },
   {
      label: 'Email *',
      type: 'text',
      name: 'email',
      placeholder: 'ejemplo@gmail.com',
      allows: 'string' as const,
   },
   {
      label: 'Teléfono *',
      type: 'text',
      name: 'phone',
      placeholder: 'Inserta tu teléfono',
      allows: 'number' as const,
   },
   {
      label: 'Contraseña *',
      type: 'password',
      name: 'password',
      allows: 'string' as const,
   },
   {
      label: 'Confirmar Contraseña *',
      type: 'password',
      name: 'confirmPassword',
      allows: 'string' as const,
   },
   {
      label: 'Código Postal *',
      type: 'text',
      name: 'postalCode',
      placeholder: 'X X X X X',
      allows: 'number' as const,
   },
];

const BOTTOM_MESSAGE = {
   message: '¿Ya tienes cuenta?',
   route: {
      url: '/pages/LogIn',
      name: 'Ingresa Aquí',
   },
};

const ERROR_MESSAGES = {
   phone: 'El teléfono debe tener 10 dígitos',
   password:
      'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número',
   confirmPassword: 'Las contraseñas no coinciden',
   email: 'El email no es válido',
   name: 'El nombre no puede estar vacío',
   firstLastName: 'El apellido paterno no puede estar vacío',
   secondLastName: 'El apellido materno no puede estar vacío',
   postalCode: 'El código postal debe tener 5 dígitos',
};

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d.,?¿!¡]{8,}$/;

export default function SignUp() {
   const router = useRouter();

   const validateDatabaseData = async (data: {
      type: string;
      content: string;
   }) => {
      try {
         const dataRoute = data.type === 'email' ? 'byEmail' : 'byPhone';
         const res = await fetch(`/api/user/${dataRoute}/${data.content}`, {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json',
            },
         });
         if (res.status === 200) {
            if (data.type === 'email')
               return 'El correo electrónico ya está registrado';
            else return 'El teléfono ya está registrado';
         } else return null;
      } catch (error) {
         console.error('Error al validar el correo electrónico:', error);
         throw new Error('Error al validar el correo electrónico');
      }
   };

   const validateFormData = async (formData: any) => {
      const validationErrors = {} as any;

      if (!formData.email || !formData.email.match(EMAIL_REGEX))
         validationErrors.email = ERROR_MESSAGES.email;
      else if (formData.email) {
         const emailError = await validateDatabaseData({
            type: 'email',
            content: formData.email,
         });
         if (emailError) validationErrors.email = emailError;
         else delete validationErrors.email;
      }
      if (!formData.name) {
         validationErrors.name = ERROR_MESSAGES.name;
      } else delete validationErrors.name;

      if (!formData.firstLastName) {
         validationErrors.firstLastName = ERROR_MESSAGES.firstLastName;
      } else delete validationErrors.firstLastName;

      if (!formData.secondLastName) {
         validationErrors.secondLastName = ERROR_MESSAGES.secondLastName;
      } else delete validationErrors.secondLastName;

      if (!formData.postalCode || formData.postalCode.length !== 5) {
         validationErrors.postalCode = ERROR_MESSAGES.postalCode;
      } else delete validationErrors.postalCode;

      if (formData.phone.length !== 10)
         validationErrors.phone = ERROR_MESSAGES.phone;
      else if (formData.email) {
         const phoneError = await validateDatabaseData({
            type: 'phone',
            content: formData.phone,
         });
         if (phoneError) validationErrors.phone = phoneError;
         else delete validationErrors.phone;
      }
      if (
         !formData.password ||
         formData.password.length < 8 ||
         !formData.password.match(PASSWORD_REGEX)
      ) {
         validationErrors.password = ERROR_MESSAGES.password;
         delete validationErrors.confirmPassword;
      } else if (
         formData.password &&
         formData.password !== formData.confirmPassword
      ) {
         validationErrors.confirmPassword = ERROR_MESSAGES.confirmPassword;
         delete validationErrors.password;
      } else {
         delete validationErrors.password;
         delete validationErrors.confirmPassword;
      }
      console.log(validationErrors);

      return validationErrors;
   };

   const handleSubmit = async (formData) => {
      try {
         delete formData.confirmPassword;
         formData.password = await bcryptjs.hash(formData.password, 10);

         const data = Object.assign(formData, {
            role: 'user',
            visibility: false,
            status: 'active',
         });

         const res = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
               'Content-Type': 'application/json',
            },
         });
         const newUser = await res.json();
         router.push('/');
         router.refresh();
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <main className='flex min-h-screen w-full flex-col items-center justify-between bg-white font-serif text-black'>
         <div className='mt-9 w-11/12 text-center text-xl lg:w-1/3'>
            {' '}
            Para comenzar a adquirir productos y conocer gente de tu comunidad
            llena este formulario para poder crear tu cuenta de EcoSol
         </div>
         <Form
            inputs={INPUTS_FORM}
            bottomMessage={BOTTOM_MESSAGE}
            onSubmit={handleSubmit}
            onValidate={validateFormData}
         />
      </main>
   );
}
