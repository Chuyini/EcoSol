import { FunctionComponent, HtmlHTMLAttributes } from "react";

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "danger";
  border: "rounded" | "none";
}

const BUTTON_CLASSES = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-gray-300 text-black",
  danger: "bg-red-500 text-white",
  rounded: "rounded-full",
  none: "rounded-sm",
};

const Button: FunctionComponent<ButtonProps> = ({
  variant,
  border,
  children,
  className,
  onClick,
}) => {
  const btnClasses =
    BUTTON_CLASSES[variant] + " " + BUTTON_CLASSES[border] + " " + className;

  return <button className={btnClasses}>{children}</button>;
};

export default Button;
