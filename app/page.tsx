import HeroBanner from '../components/organisms/HeroBanner/HeroBanner';
import Button from '../components/atoms/Button/Button';
import Services from '../components/organisms/Services/Services';
import Avatar from '../components/atoms/Avatar/Avatar';
import Us from '../components/organisms/Us/Us';
import ChurchIcon from '../components/atoms/icons/Church';

const HERO_BANNER_DATA = {
   icon: (
      <ChurchIcon className='mb-4 hidden h-16 w-16 text-primary-1 lg:block' />
   ),
   img: '/HomePage_HeroBanner.svg',
   title: 'Bienvenido a EcoSol un punto de contacto para miembros de la comunidad',
   description:
      'En Ecosol estamos comprometidos a brindarte las herramientas suficientes para que puedas establecer contacto con diferentes miembros de la comunidad parriquial y logres intercambiar productos que sean de tu interés. Logrando que se fomenten las relaciones entre la comunidad ',
};

const US_CONTENT = {
   icon: <ChurchIcon className='mx-auto w-14 text-primary-1 lg:mx-0' />,
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
      img: '/HomePage_Services_Card1.svg',
   },
   {
      data: {
         title: 'Intercambio',
         body: 'A través de un trueque establecido y acordado entre las partes involucradas.',
      },
      img: '/HomePage_Services_Card2.svg',
   },
   {
      data: {
         title: 'Donación',
         body: 'A través de un intercambio sin costo  entre las partes involucradas.',
      },
      img: '/HomePage_Services_Card3.svg',
   },
];

export default function Home() {
   return (
      <main className='flex min-h-screen flex-col items-center justify-between '>
         <HeroBanner {...HERO_BANNER_DATA} />
         <Us body={US_CONTENT} src='/HomePage_Us.svg' />
         <Services
            title='Servicios'
            body='Dentro de EcoSol podrás encontrar productos ofertados de la siguiente manera'
            servicesData={SERVICES_CARD_DATA}
         />
      </main>
   );
}
