import { FunctionComponent, HtmlHTMLAttributes } from "react";
import Image from "next/image";

const Logo: FunctionComponent = ({
  
}) => {
  return <Image src={"/logo.png"} alt="logo" width={100} height={100}/>
};

export default Logo;
