import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useMediaQuery } from "react-responsive";
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
import {
  ipad11Padding,
  mac24Padding,
  macbook14Padding,
} from "../styles/layout";
import useWindowDimensions from "../components/WindowSize";

function SliderBox({ title }: SliderBoxProps) {
  const { data, isLoading } = useQuery(["movies", "nowPlaying"], getMovies);
  const isIpad11 = useMediaQuery({ query: "(max-width: 1112px)" });
  const isMacBook14 = useMediaQuery({ query: "(max-width: 1440px)" });
  const width = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(true);
  const [onGoing, setOnGoing] = useState("forward");
  const [clickedDirection, setClickedDirection] = useState("forward");

  const mediaPadding = isIpad11
    ? ipad11Padding
    : isMacBook14
    ? macbook14Padding
    : mac24Padding;

  const offset = isIpad11 ? 5 : 6;
  const totalMovies = data.results.length - 1;
  const maxIndex = Math.floor(totalMovies / offset) - 1;

  const RowVariants = {
    hidden: {
      x:
        onGoing === "forward" && onGoing === clickedDirection
          ? width + 150
          : -width - 150,
    },
    visible: { x: 0 },
    exit: {},
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);

  function changeIndex(clickedDirection: "forward" | "backward") {
    console.log("onGoing", onGoing);
    console.log("clickedDirection", clickedDirection);
    if (data) {
      if (leaving) {
        console.log("leaving", index);
        RowVariants.exit = {
          x: clickedDirection === "forward" ? -width - 150 : width + 150,
        };
      }
      toggleLeaving();

      if (clickedDirection == "forward") {
        setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
        setOnGoing("forward");
      } else {
        setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
        setOnGoing("backward");
      }
    }
  }

  return (
    <ASlider>
      <SliderTitle>{title}</SliderTitle>
      <Slider>
        <Arrows>
          <ArrowBox
            onClick={() => {
              changeIndex("backward");
              setClickedDirection("backward");
            }}
          >
            <ArrowBackIosNewIcon
              style={{
                ...ArrowStyle,
                position: "absolute",
                left: `-${mediaPadding}`,
              }}
            />
          </ArrowBox>
          <ArrowBox
            onClick={() => {
              changeIndex("forward");
              setClickedDirection("forward");
            }}
          >
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
            variants={RowVariants}
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
