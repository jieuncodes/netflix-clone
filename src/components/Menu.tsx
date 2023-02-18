import { motion } from "framer-motion";
import { Link, useMatch } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "../routes/Home";
import Movies from "../routes/Movies";
import NewAndPopular from "../routes/New";
import Tv from "../routes/TV";
import { MenuDiv } from "../styles/Header";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <>
      <MenuDiv>
        <MenuItem url="/" text="Home" />
        <MenuItem url="/tv" text="TV Shows" />
        <MenuItem url="/movies" text="Movies" />
        <MenuItem url="/new" text="New & Popular" />
      </MenuDiv>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tv" element={<Tv />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/new" element={<NewAndPopular />}></Route>
      </Routes>
    </>
  );
}

export default Menu;
