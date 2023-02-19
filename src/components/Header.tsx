import { HeaderArea } from "../styles/Header";
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";

function Header() {
  return (
    <HeaderArea>
      <Logo />
      <Menu />
      <Search />
    </HeaderArea>
  );
}

export default Header;
