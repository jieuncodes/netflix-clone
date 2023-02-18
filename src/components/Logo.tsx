import { Link } from "react-router-dom";
import { LogoDiv, LogoText } from "../styles/Header";


function Logo() {
  return (
    <LogoDiv>
      <Link to="/">
        <LogoText>LIMFLIX</LogoText>
      </Link>
    </LogoDiv>
  );
}

export default Logo;
