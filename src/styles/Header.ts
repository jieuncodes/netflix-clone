import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "tailwind-styled-components";

export const HeaderArea = styled(motion.div)`
  display: flex;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 50;
  background-color: black;
  place-items: center;

  height: 100px;
  padding: 60px 80px;
  @media (min-width: 1112px) {
    height: 60px;
    padding: 35px 50px;
  }
  @media (min-width: 1645px) {
    height: 60px;
    padding: 45px 50px;
  }
`;
export const LogoDiv = tw.div<any>`font-logo text-[#ff1d28]`;
export const LogoText = tw.span`text-[50px] ipad11:text-[32px]`;

export const MenuDiv = tw.div<any>`m-7 grid grid-cols-[100px,120px,100px,180px] ipad11:grid-cols-[50px,90px,50px,120px]  macbook14:grid-cols-[55px,95px,55px,130px] text-white`;
export const MenuSpanContainer = tw.div<any>` flex place-content-center mt-1`;
export const MenuSpan = tw.span` m-3 opacity-90 hover:opacity-60 duration-500 relative transition font-normal text-xl ipad11:text-sm macbook14:text-[15px]`;

export const SearchBarContainer = styled(motion.form)`
  display: flex;
  position: absolute;
  justify-content: start;
  align-items: center;
  width: 230px;
  height: 35px;
  right: 160px;
  @media (min-width: 1112px) {
    right: 60px;
  }
  @media (min-width: 1645px) {
    right: 70px;
  }
`;

export const SearchIconBox = styled(motion.div)`
  display: flex;
  margin: 10px;
  z-index: 1;
`;

export const SearchBar = styled(motion.input)`
  position: absolute;
  transform-origin: right center;
  background-color: rgba(0, 0, 0, 0.7);
  border-color: white;
  border: solid 2px;
  transform-origin: right center;
  color: white;
  font-size: larger;
  font-weight: 500;
  height: 60px;
  width: 300px;
  padding-left: 55px;

  @media (min-width: 1112px) {
    border: solid 1px;
    font-size: medium;
    height: 40px;
    width: 240px;
    padding-left: 50px;
  }
  @media (min-width: 1645px) {
    border: solid 1px;
    font-size: medium;
    height: 40px;
    width: 260px;
    padding-left: 55px;
  }
`;
