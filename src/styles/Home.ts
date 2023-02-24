import styled from "styled-components";
import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

export const Wrapper = tw.div<any>`absolute w-screen overflow-x-hidden`;
export const Loader = tw.div<any>` flex place-items-center justify-center text-red-600 h-screen w-screen absolute right-0 top-0 text-3xl font-semibold`;

export const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 95vh;
  overflow: hidden;
`;
export const BannerCover = styled.div`
  position: absolute;
  top: 0;
  z-index: 11;
  width: 100vw;
  height: 95vh;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0) 30%,
    rgba(0, 0, 0, 1) 95%,
    rgba(0, 0, 0, 1) 100%
  );
`;

export const Banner = styled.div<{ bgphoto: string }>`
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  background-repeat: no-repeat;
`;
export const Info = tw.div<any>`text-white flex flex-col absolute bottom-[30vh] macbook14:bottom-[30vh] p-[80px] ipad11:p-[50px]`;
export const Title = tw.div<any>` font-tradewinds text-6xl ipad11:text-5xl macbook14:text-6xl max-w-[60vw] leading-snug `;
export const OverView = tw.div<any>` max-w-[50vw] mt-10 ipad11:mt-6 macbook14:mt-7 text-2xl ipad11:text-lg macbook14:text-xl font-normal macbook14:font-light leading-normal`;

export const SliderArea = tw.div`z-30 flex flex-col absolute w-full -mt-[200px] p-[50px]`;
export const SliderTitle = tw.span` text-white text-4xl ipad11:text-2xl font-medium mb-4`;
export const Slider = tw.div<any>`w-screen`;

export const Arrows = tw.div` z-30 opacity-0 hover:opacity-100 delay-300 absolute flex justify-between w-full h-full place-items-center`;
export const ArrowBox = tw.div`z-20 w-14 h-[152px] bg-black/40 flex ipad11:-ml-[50px] ipad11:mr-[50px] mt-0 mb-0 rounded-sm `;

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
