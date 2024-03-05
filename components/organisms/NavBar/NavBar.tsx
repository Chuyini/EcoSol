"use client";
import { FunctionComponent, HtmlHTMLAttributes, useState, useEffect } from "react";
import UserButtons, { Button } from "../../molecules/UserButtons/UserButtons";
import Navigation, { Route } from "../../molecules/Navigation/Navigation";
import Logo from "../../atoms/Logo/Logo";
import LogoMobil from "../../atoms/LogoMobile/LogoMobile";
import HamburgerMenuButton from "../../atoms/BurguerButton/BurguerButton";

interface NavBarProps extends HtmlHTMLAttributes<HTMLDivElement> {
  navigationButtons: Route[];
  userButtons: Button[];
}

const NavBar: FunctionComponent<NavBarProps> = ({
  navigationButtons,
  userButtons,
}) => {
  // Define el estado para controlar la visibilidad del menú en dispositivos móviles
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1440); // Establece el tamaño de 1440px como límite para dispositivos móviles
    };

    // Agrega un event listener para detectar cambios en el tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Ejecuta el efecto solo una vez al montar el componente

  return (
    <nav className="w-full bg-white flex justify-between h-20 items-center">
      {isMobileView ? <LogoMobil /> : <Logo />}

      {/* Renderiza los botones de navegación solo en pantallas grandes */}
      <div className="hidden lg:flex ">
        <Navigation buttons={navigationButtons} />
      </div>

      {/* Botón de hamburguesa para abrir/cerrar el menú en dispositivos móviles */}
      <HamburgerMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} isOpen={isMobileMenuOpen} />

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
