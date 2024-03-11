import { FunctionComponent, HtmlHTMLAttributes } from "react"
import Image from "next/image"

//las interfaces guardan atributos que se piden desde el HTML donde se depliega el componente (selector)
//En este caso es HeroBanner
interface HeroBannerProps extends HtmlHTMLAttributes<HTMLElement> {
  img: string;//ocupamos obligatoriamente una imagen
  title:string;//ocupamos opcionalmente un texto
  description?:string
  imgIglesia:string
}


const HeroBanner: FunctionComponent<HeroBannerProps> = ({
  img, title, description, imgIglesia//<-- cumplimos el contrato de la
}) => {
  
  return <div className="w-full   z-9 h-20 bg-center"> 
  <Image className="z-0 absolute md: w-1/2 " src={img} alt="HeroBanner background"  layout="fill" objectFit="cover" />

   
  <div className="absolute inset-0 bg-sky-100 opacity-75 z-10"></div> 
  <img className="hidden lg:block lg:absolute lg:top-20 lg:left-50 z-20 " src={imgIglesia} alt="Sprite Iglesia" width={80} height={80}/>
  <div className="absolute  z-20 lg:pr-24 lg:top-48  text-black font-serif lg:text-left lg:left-20 lg:text-7xl text-6xl top-20 leading-normal right-2 pr-1 pl-2 text-center"><h1 className="">{title}</h1></div>
  <div className="absolute lg:left-20 z-20 lg:text-left bottom-32 text-3xl right-2 lg:bottom-24  lg:pr-20 font-serif lg:text-2xl text-lg text-center"><h3 className="inline">{description}</h3></div>
  </div>
};

export default HeroBanner;
