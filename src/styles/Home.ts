import styled from "styled-components";
import tw from "tailwind-styled-components";

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
    rgba(0, 0, 0, 0) 0%,
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
export const Info = tw.div`text-white flex flex-col absolute bottom-[35vh] ml-14`;
export const Title = tw.div` font-tradewinds text-6xl max-w-[60vw] leading-snug`;
export const OverView = tw.div` max-w-[50vw] mt-5 text-xl font-normal leading-normal`;
