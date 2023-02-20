import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "tailwind-styled-components";

export const HeaderArea = styled(motion.div)`
  display: flex;
  width: 100vw;
  position: fixed;
  top: 0;
  height: 64px;
  z-index: 10;
  background-color: black;
  place-items: center;
`;

export const LogoDiv = tw.div<any>`font-logo text-lg text-red-600 ml-10`;
export const LogoText = tw.span`text-3xl`;

export const MenuDiv = tw.div<any>`m-7 grid grid-cols-[60px,110px,60px,140px] text-white`;
export const MenuSpanContainer = tw.div<any>` flex place-content-center`;
export const MenuSpan = tw.span` m-3 opacity-90 hover:opacity-60 duration-500 relative transition `;

export const SearchBarContainer = styled(motion.form)`
  display: flex;
  position: absolute;
  justify-content: start;
  align-items: center;
  right: 2rem;
  width: 230px;
  height: 35px;
`;

export const SearchIconBox = styled(motion.div)`
  display: flex;
  margin: 10px;
  z-index: 1;
`;

export const SearchBar = styled(motion.input)`
  transform-origin: right center;
  position: absolute;
  background-color: transparent;
  width: 230px;
  padding-left: 45px;
  height: 40px;
  border: solid 1.5px;
  border-color: white;
  transform-origin: right center;
  color: white;
`;
