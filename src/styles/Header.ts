import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "tailwind-styled-components";

export const HeaderArea = styled(motion.div)`
  display: flex;
  width: 100vw;
  position: fixed;
  top: 0;
  height: 100px;
  z-index: 30;
  background-color: black;
  place-items: center;
  padding: 60px 80px;
`;
export const LogoDiv = tw.div<any>`font-logo text-[#ff1d28]`;
export const LogoText = tw.span`text-[50px]`;

export const MenuDiv = tw.div<any>`m-7 grid grid-cols-[100px,120px,100px,180px] text-white`;
export const MenuSpanContainer = tw.div<any>` flex place-content-center`;
export const MenuSpan = tw.span` m-3 opacity-90 hover:opacity-60 duration-500 relative transition font-normal text-xl`;

export const SearchBarContainer = styled(motion.form)`
  display: flex;
  position: absolute;
  justify-content: start;
  align-items: center;
  right: 160px;
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
  background-color: rgba(0, 0, 0, 0.7);
  width: 300px;
  padding-left: 55px;
  height: 60px;
  border: solid 2px;
  border-color: white;
  transform-origin: right center;
  color: white;
  font-size: larger;
  font-weight: 500;
`;
