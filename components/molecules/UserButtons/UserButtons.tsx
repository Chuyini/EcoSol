import { FunctionComponent, HtmlHTMLAttributes } from "react";
import Link from "next/link";

export interface Button {
  name: string;
  url: string;
  variant: 'primary' | 'secondary';
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
    <div className="flex flex-col lg:w-1/4 lg:flex-row border-black h-36 ">
      {buttons.map((button) => {
        const variant = VARIANTS[button.variant] + " ";
        return (
          <Link href={button.url} key={button.url} className={`flex m-auto text-white py-4 px-12 rounded-full w-32 items-center lg:mx-3 justify-center ${variant} hover:brightness-90`}>
            {button.name}
          </Link>
        )
      })}
    </div>
  );
};

export default UserButtons;
