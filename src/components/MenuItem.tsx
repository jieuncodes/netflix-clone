import { Link, To, useMatch } from "react-router-dom";
import { MenuSpan, MenuSpanContainer } from "../styles/Header";

interface IMenuItem {
  url: string;
  text: string;
}

function MenuItem({ url, text }: IMenuItem) {
  const match = useMatch(url);
  return (
    <Link to={url}>
      <MenuSpanContainer>
        <MenuSpan className={match ? "font-bold hover:opacity-100" : ""}>
          {text}
        </MenuSpan>
      </MenuSpanContainer>
    </Link>
  );
}
export default MenuItem;
