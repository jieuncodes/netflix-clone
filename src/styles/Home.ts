import styled from "styled-components";
import tw from "tailwind-styled-components";

export const Wrapper = tw.div<any>`bg-black`;
export const Loader = tw.div<any>`bg-black flex place-items-center justify-center text-red-600 h-screen w-screen absolute right-0 top-0 text-3xl font-semibold` 

export const Banner = styled.div<{bgPhoto: string}>``;