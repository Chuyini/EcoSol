import { FunctionComponent, HtmlHTMLAttributes } from "react";
import Image from "next/image";

const LogoMobile: FunctionComponent = ({
  
}) => {
  return <Image src={"/logo_mobile.png"} alt="logo" width={50} height={50} className="ml-10"/>
};

export default LogoMobile;
