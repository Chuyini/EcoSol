import { FunctionComponent, HtmlHTMLAttributes } from "react";
import Image from "next/image";

const LogoMobil: FunctionComponent = ({
  
}) => {
  return <Image src={"/logo_movil.png"} alt="logo" width={50} height={50} className="ml-10"/>
};

export default LogoMobil;
