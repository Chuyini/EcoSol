"use client";
import { FunctionComponent, HtmlHTMLAttributes } from "react";
import { useState } from "react"; // Importa useState
import UserButtons, { Button } from "../../molecules/UserButtons/UserButtons";
import Navigation, { NavButton } from "../../molecules/Navigation/Navigation";
import Logo from "../../atoms/Logo/Logo";
import LogoMobil from "../../atoms/LogoMobil/LogoMobil";

interface NavBarProps extends HtmlHTMLAttributes<HTMLDivElement> {
  navigationButtons: NavButton[];
  userButtons: Button[];
}

const NavBar: FunctionComponent<NavBarProps> = ({
  navigationButtons,
  userButtons,
}) => {
  // Define el estado para controlar la visibilidad del menú en dispositivos móviles
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white flex justify-between h-20 items-center">
      <Logo/>

      {/* Renderiza los botones de navegación solo en pantallas grandes */}
      <div className="hidden lg:flex ">
        <Navigation buttons={navigationButtons} />
      </div>

      {/* Botón de hamburguesa para abrir/cerrar el menú en dispositivos móviles */}
      <button
        className="block lg:hidden px-2 text-gray-600 focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
          {isMobileMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>

      {/* Renderiza los botones del usuario */}
      <div className="hidden lg:flex">
        <UserButtons buttons={userButtons}/>
      </div>

      {/* Menú desplegable en dispositivos móviles */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 w-full h-1/2 bg-white z-10 flex flex-col items-center">
          <Navigation buttons={navigationButtons} />
          <div className="space-y-4">
            <UserButtons buttons={userButtons} className=""/>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
