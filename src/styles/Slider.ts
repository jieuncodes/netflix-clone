import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "tailwind-styled-components";

export const SliderArea = tw.div`z-30 flex flex-col absolute w-full -mt-[170px] p-[50px]`;
export const ASlider = tw.div`relative h-[270px]`;
export const SliderTitle = tw.span` text-white text-4xl ipad11:text-2xl font-medium`;
export const Slider = tw.div<any>`w-screen relative mt-5`;

export const Arrows = tw.div` z-30 w-full h-full opacity-0 hover:opacity-100 delay-300 absolute flex justify-between place-items-center mt-[75px]`;
export const ArrowBox = tw.div`z-20 w-14 h-[152px] bg-black/40 flex ipad11:-ml-[50px] ipad11:mr-[50px] mt-0 mb-0 rounded-sm`;

export const ArrowStyle = {
  color: "white",
  fontSize: "30px",
  top: "50%",
  transform: "translateY(-50%)",
  margin: "0 7px",
};
export const Row = styled(motion.div)`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 15px;
`;
export const Box = styled(motion.div)<{ bgphoto: string }>`
  background-image: url(${(props) => props.bgphoto});
  background-size: auto 100%;
  background-position: center;
  cursor: pointer;
  border-radius: 7px;
  height: 230px;
  @media (min-width: 1112px) {
    height: 150px;
    width: 250px;
  }
`;

export const RankedBox = tw.div`relative h-[200px] w-[250px] ml-3 flex flex-row align-middle justify-end `;
export const Ranking = styled.span`
  position: absolute;
  font-size: 280px;
  font-weight: 900;
  color: transparent;
  left: -10px;
  top: 50%;
  transform: translateY(-43%);
  opacity: 70%;
  -webkit-text-stroke: 5px #999999;
`;
export const RankedImgBox = styled(motion.div)<{ bgphoto: string }>`
  background-image: url(${(props) => props.bgphoto});
  background-size: auto 100%;
  background-position: center;
  cursor: pointer;
  border-radius: 5px;
  max-height: 220px;
  min-width: 160px;
  background-repeat: no-repeat;
  z-index: 10;
`;
