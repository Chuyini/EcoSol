import Button from "../components/atoms/Button/Button";
import HeroBanner from "../components/molecules/HeroBanner/HeroBanner";

const HERO_BANNER_DATA={
  img:"/image/FondoH.jpg", 
  imgIglesia:"/image/iglesia.png",
  title: "Bienvenido a EcoSol un punto de contacto para miembros de la comunidad",
  description:"En EcoSol estamos comprometidos a brindarte las herramientas suficientes para que puedas establecer contacti con diferentes miembros de la comunidad parroquial  y logres intercambiar productos que sean de tu interes. Logrando que se fomenten las relaciones entre la comunidad."
}


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       {/* <div className="z-20">jgmgjmfhjmnfgfh</div> Procurar que se vea este div*/}
      <HeroBanner {...HERO_BANNER_DATA}/>
      
      
    </main>
  );
}
