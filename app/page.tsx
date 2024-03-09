import Button from '../components/atoms/Button/Button';
import Services from '../components/organisms/Services/Services';
import Avatar from '../components/atoms/Avatar/Avatar';
import UsContent from '../components/molecules/UsContent/UsContent';
import ChurchIcon from '../components/atoms/icons/Church';

const US_CONTENT = {
   icon: <ChurchIcon className='w-14' />,
   title: 'Nosotros',
   body: 'EcoSol es una plataforma web que sirve como punto de contacto para los diferentes miembros de la comunidad parroquial de San Luis Potosí que tengan interés en vender, comprar, intercambiar o donar aquellos productos que ya no deseen para darles una segunda vida y con ello fomentar la conciencia ecológica, además de fortalecer las relaciones sociales entre los miembros de cada parroquia.',
   route: { name: 'Registrate ya', url: 'pages/SignUp' },
   imageSrc: 'l.png',
};

const SERVICES_CARD_DATA = [
   {
      data: {
         title: 'Venta',
         body: 'A través de una retribución económica marcada por un precio fijo',
      },
      img: '/Card1.png',
   },
   {
      data: {
         title: 'Intercambio',
         body: 'A través de un trueque establecido y acordado entre las partes involucradas.',
      },
      img: '/Card2.png',
   },
   {
      data: {
         title: 'Donación',
         body: 'A través de un intercambio sin costo  entre las partes involucradas.',
      },
      img: '/Card3.png',
   },
];

export default function Home() {
   return (
      <main className='flex min-h-screen flex-col items-center justify-between pt-24'>
         <Avatar userId='123' picture='/Card1.png' className='mr-8' />

         <Button variant='secondary' border='none' className=''>
            Hola a todos
         </Button>
         <UsContent {...US_CONTENT} />
         <Services
            title='Servicios'
            body='Dentro de EcoSol podrás encontrar productos ofertados de la siguiente manera'
            servicesData={SERVICES_CARD_DATA}
         />
      </main>
   );
}
