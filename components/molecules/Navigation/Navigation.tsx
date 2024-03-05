import { FunctionComponent, HtmlHTMLAttributes } from "react";
import Link from "next/link";

export interface Route {
  name : string;
  url : string;
}

interface NavigationProps extends HtmlHTMLAttributes<HTMLDivElement> {
  buttons: Route[];
}

const Navigation: FunctionComponent<NavigationProps> = ({
  buttons, 
}) => {
  return (
    <div className="w-1/2 flex-col lg:flex-row flex justify-between h-48">
      {buttons.map((button) => (
        <Link href={button.url} key={button.url} className="flex m-auto text-black lg:mx-12 lg:p-0">
          {button.name}
        </Link>
      ))}
    </div>
    
  )
};

export default Navigation;
