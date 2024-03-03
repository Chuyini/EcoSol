import Button from '../components/atoms/Button/Button';
import Services from '../components/organisms/Services/Services';

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
      <main className='flex min-h-screen flex-col items-center justify-between py-24'>
         <Button variant='secondary' border='none' className=''>
            Hola a todos
         </Button>

         <Services
            title='Servicios'
            body='Dentro de EcoSol podrás encontrar productos ofertados de la siguiente manera'
            servicesData={SERVICES_CARD_DATA}
         />
      </main>
   );
}
