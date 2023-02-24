import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useMediaQuery } from "react-responsive";
import {
  ipad11Padding,
  mac24Padding,
  macbook14Padding,
} from "../styles/layout";

import useWindowDimensions from "../components/WindowSize";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useQuery } from "react-query";
import { getMovies } from "../api";
import { makeImgPath } from "../utils";

import {
  Arrows,
  SliderTitle,
  Slider,
  ArrowStyle,
  ArrowBox,
  Row,
  Box,
  ASlider,
} from "../styles/Slider";
import { SliderBoxProps } from "../interfaces";

function SliderBox({ title }: SliderBoxProps) {
  const { data, isLoading } = useQuery(["movies", "nowPlaying"], getMovies);
  const isIpad11 = useMediaQuery({ query: "(max-width: 1112px)" });
  const isMacBook14 = useMediaQuery({ query: "(max-width: 1440px)" });
  const width = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const [leaving, setLeaving] = useState(false);
  const [direction, setDirection] = useState("forward");

  const toggleLeaving = () => setLeaving((prev) => !prev);
  const offset = isIpad11 ? 5 : 6;

  const mediaPadding = isIpad11
    ? ipad11Padding
    : isMacBook14
    ? macbook14Padding
    : mac24Padding;

  const rowVariants = {
    hidden: { x: direction == "forward" ? width + 150 : -width - 150 },

    visible: {
      x: 0,
    },

    exit: { x: direction == "forward" ? -width - 150 : width + 150 },
  };
  function changeIndex(direction: String) {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      setDirection(direction + "");
      const totalMovies = data.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      if (direction == "forward") {
        setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
      } else {
        setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
      }
    }
  }
  return (
    <ASlider>
      <SliderTitle>{title}</SliderTitle>
      <Slider>
        <Arrows>
          <ArrowBox onClick={() => changeIndex("backward")}>
            <ArrowBackIosNewIcon
              style={{
                ...ArrowStyle,
                position: "absolute",
                left: `-${mediaPadding}`,
              }}
            />
          </ArrowBox>
          <ArrowBox onClick={() => changeIndex("forward")}>
            <ArrowForwardIosIcon
              style={{
                ...ArrowStyle,
                position: "absolute",
                right: mediaPadding,
              }}
            />
          </ArrowBox>
        </Arrows>

        <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
          <Row
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={index}
            transition={{ type: "tween", duration: 1 }}
          >
            {data?.results
              .slice(1)
              .slice(offset * index, offset * index + offset)
              .map((movie: any) => (
                <Box
                  layoutId={movie.id + ""}
                  key={movie.id}
                  transition={{ type: "tween" }}
                  bgphoto={makeImgPath(movie.backdrop_path, "w500")}
                ></Box>
              ))}
          </Row>
        </AnimatePresence>
      </Slider>
    </ASlider>
  );
}

export default SliderBox;
