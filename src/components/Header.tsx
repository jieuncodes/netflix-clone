import { HeaderArea } from "../styles/Header";
import Logo from "./Logo";
import Menu from "./Menu";

function Header() {
  return (
    <HeaderArea>
      <Logo />
      <Menu />
    </HeaderArea>
  );
}

export default Header;
