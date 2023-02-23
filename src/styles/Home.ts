import styled from "styled-components";
import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

export const Wrapper = tw.div<any>`absolute`;
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
    rgba(0, 0, 0, 1) 99%,
    rgba(0, 0, 0, 1) 100%
  );
`;

export const Banner = styled.div<{ bgPhoto: string }>`
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-repeat: no-repeat;
`;
export const Info = tw.div<any>`text-white flex flex-col absolute bottom-[30vh] macbook14:bottom-[30vh] p-[80px] ipad11:p-[50px]`;
export const Title = tw.div<any>` font-tradewinds text-6xl ipad11:text-5xl macbook14:text-6xl max-w-[60vw] leading-snug `;
export const OverView = tw.div<any>` max-w-[50vw] mt-10 ipad11:mt-6 macbook14:mt-7 text-2xl ipad11:text-lg macbook14:text-xl font-normal macbook14:font-light leading-normal`;

export const Slider = tw.div<any>`z-20 relative -top-48 ipad11:m-[50px]`;
export const SliderTitle = tw.span` text-white text-4xl ipad11:text-2xl font-medium `;
export const Row = styled(motion.div)`
position: absolute;
  width: 100%;
  margin-top: 15px;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(6, 1fr);  
  @media (max-width: 1112px) {
    grid-template-columns: repeat(5, 1fr);

  } 
`;
export const Box = styled(motion.div)<{ bgPhoto: string }>`
  background-image: url(${(props) => props.bgPhoto});
  cursor: pointer;
  border-radius: 7px;
  background-size: cover;  
  height: 230px;
  @media (max-width: 1112px) {
    height: 130px;
    width: 220px;
  } 
`;
