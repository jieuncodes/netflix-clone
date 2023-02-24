import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { windowDimentionAtom } from "../atom";

function useWindowDimensions() {
  const [windowWidth, setWindowWidth] = useRecoilState(windowDimentionAtom);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    console.log("window size is now: ", windowWidth);
    return () => window.removeEventListener("resize", handleResize);
  }, [setWindowWidth]);
  return windowWidth;
}

export default useWindowDimensions;
