import { FunctionComponent, HtmlHTMLAttributes } from "react";
import UserButtons,{Button} from "../../molecules/UserButtons/UserButtons";
import Navigation,{NavButton} from "../../molecules/Navigation/Navigation";
import Logo from "../../atoms/Logo/Logo";

interface NavBarProps extends HtmlHTMLAttributes<HTMLDivElement> {
  navigationButtons : NavButton[];
  userButtons : Button[];
}


const NavBar: FunctionComponent<NavBarProps> = ({
  navigationButtons,
  userButtons,
}) => {
  return (
    <nav className="w-full bg-white flex justify-between h-20 items-center">
      <Logo />
      <Navigation buttons={navigationButtons}/> 
      <UserButtons buttons={userButtons}/>  
    </nav>
  )
};

export default NavBar;
