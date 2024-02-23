import Button from '../components/atoms/Button/Button';

export default function Home() {
   return (
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
         <Button variant='secondary' border='none' className=''>
            Hola a todos
         </Button>
      </main>
   );
}
