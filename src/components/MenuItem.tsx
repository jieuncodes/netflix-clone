import { Link, useMatch } from "react-router-dom";
import { IMenuItem } from "../interfaces";
import { MenuSpan, MenuSpanContainer } from "../styles/Header";

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
