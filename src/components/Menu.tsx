import { Route, Routes } from "react-router-dom";
import tw from "tailwind-styled-components";
import Home from "../routes/Home";
import Movies from "../routes/Movies";
import NewAndPopular from "../routes/New";
import Tv from "../routes/TV";
import { MenuDiv, MenuItem } from "../styles/Header";

function Menu() {
  return (
    <>
      <MenuDiv>
        <MenuItem>Home</MenuItem>
        <MenuItem>TV Shows</MenuItem>
        <MenuItem>Movies</MenuItem>
        <MenuItem>New & Popular</MenuItem>
      </MenuDiv>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tv" element={<Tv />}></Route>
        <Route path="/movie" element={<Movies />}></Route>
        <Route path="/new" element={<NewAndPopular />}></Route>
      </Routes>
    </>
  );
}

export default Menu;
