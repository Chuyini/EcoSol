import { FunctionComponent, HtmlHTMLAttributes } from "react";
import Link from "next/link";

export interface NavButton {
  name : string;
  url : string;
}

interface NavigationProps extends HtmlHTMLAttributes<HTMLDivElement> {
  buttons: NavButton[];
}

const Navigation: FunctionComponent<NavigationProps> = ({
  buttons, 
}) => {
  return (
    <div className="w-1/2 flex justify-between border-white border h-12 bg-white">
      {buttons.map((button) => (
        <Link href={button.url} key={button.url} className="flex m-auto text-black">
          {button.name}
        </Link>
      ))}
    </div>
    
  )
};

export default Navigation;
