import { useAnimation, useMotionValueEvent, useScroll } from "framer-motion";
import { HeaderArea } from "../styles/Header";
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";

const headerVariants = {
  top: { backgroundColor: "rgba(0, 0, 0, 0)" },
  scroll: {
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
};

function Header() {
  const { scrollYProgress } = useScroll();
  const headerAnimation = useAnimation();
  useMotionValueEvent(scrollYProgress, "change", (currY) => {
    console.log("currY", currY);
    if (currY > 0.1) {
      headerAnimation.start("scroll");
    } else {
      headerAnimation.start("top");
    }
  });

  return (
    <HeaderArea
      variants={headerVariants}
      animate={headerAnimation}
      initial={"top"}
    >
      <Logo />
      <Menu />
      <Search />
    </HeaderArea>
  );
}

export default Header;
