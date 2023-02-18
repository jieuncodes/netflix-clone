import tw from "tailwind-styled-components";

export const HeaderArea = tw.div<any>`z-10 fixed flex w-full top-0 h-16 place-items-center shadow-lg  bg-black`;

export const LogoDiv = tw.div<any>`font-logo text-lg text-red-600 ml-10`;
export const LogoText = tw.span`text-3xl`;

export const MenuDiv = tw.div<any>`m-7 grid grid-cols-[60px,100px,60px,140px] text-white`;
export const MenuSpanContainer = tw.div` flex place-content-center`;
export const MenuSpan = tw.span` m-3 opacity-90 hover:opacity-60 duration-500 relative transition `;
