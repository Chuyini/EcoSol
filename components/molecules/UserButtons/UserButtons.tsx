import { FunctionComponent, HtmlHTMLAttributes } from "react";
import Link from "next/link";

export interface Button {
  name : string;
  url : string;
  variant : 'primary' | 'secondary';
}

interface UserButtonsProps extends HtmlHTMLAttributes<HTMLDivElement> {
  buttons: Button[];
}

const VARIANTS = {
  primary: "bg-blue-500",
  secondary: "bg-blue-300",
};


const UserButtons: FunctionComponent<UserButtonsProps> = ({
  buttons,
}) => {
  return (
    <div className="w-1/3 flex justify-between border-white border h-12 bg-white">
      {buttons.map((button) => {
        const variant = VARIANTS[button.variant] + " ";
        return (
        <Link href={button.url} key={button.url} className={variant + "flex m-auto text-white p-2 rounded-full w-32 items-center justify-center"}>
          {button.name}
        </Link>
      )})}
    </div>
  )
};

export default UserButtons;
