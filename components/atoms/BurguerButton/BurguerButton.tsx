import { FunctionComponent, HtmlHTMLAttributes } from "react";

interface HamburgerMenuButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  isOpen: boolean; // Nuevo prop para indicar si el menú está abierto o cerrado
}

const HamburgerMenuButton: FunctionComponent<HamburgerMenuButtonProps> = ({ onClick, isOpen }) => {
  return (
    <button
      className="block lg:hidden px-2 text-gray-600 focus:outline-none"
      onClick={onClick}
    >
      <svg
        className="h-6 w-6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {isOpen ? ( // Cambia el ícono dependiendo del estado del menú
          <path d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path d="M4 6h16M4 12h16m-7 6h7" />
        )}
      </svg>
    </button>
  );
};

export default HamburgerMenuButton;
