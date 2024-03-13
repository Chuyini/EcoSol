import Button from "../components/atoms/Button/Button";
import HeroBanner from "../components/molecules/HeroBanner/HeroBanner";

const HERO_BANNER_DATA={
  img:"/FondoH.jpeg", 
  title: "Bienvenido a EcoSol un punto de contacto para miembros de la comunidad",
  description:""
}


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <HeroBanner {...HERO_BANNER_DATA}/>
      <div>jgmgjmfhjmnfgfh</div> {/*Procurar que se vea este div*/}
      
    </main>
  );
}
