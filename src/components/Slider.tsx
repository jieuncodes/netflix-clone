import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useQuery } from "react-query";
import { getNowPlayingMovies, getTrending } from "../api";
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

function SliderBox({ title, section, queryKey }: SliderBoxProps) {
  const api =
    queryKey == "allNowPlaying"
      ? getNowPlayingMovies
      : () => getTrending("all", "day");

  const { data, isLoading } = useQuery([section, queryKey], api);
  const isIpad11 = useMediaQuery({ query: "(max-width: 1112px)" });
  const isMacBook14 = useMediaQuery({ query: "(max-width: 1440px)" });
  const width = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(true);
  const [onGoing, setOnGoing] = useState("forward");
  const [clickedDirection, setClickedDirection] = useState("forward");
  const [isAnimating, setIsAnimating] = useState(false);

  const mediaPadding = isIpad11
    ? ipad11Padding
    : isMacBook14
    ? macbook14Padding
    : mac24Padding;

  const offset = isIpad11 ? 5 : 6;
  const totalVideos = data?.results.length - 1;
  const maxIndex = Math.floor(totalVideos / offset) - 1;

  const RowVariants = {
    hidden: {
      x:
        onGoing === "forward" && onGoing === clickedDirection
          ? width + 230
          : -width - 230,
    },
    visible: { x: 0 },
    exit: {},
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);

  function changeIndex(clickedDirection: "forward" | "backward") {
    if (data && !isAnimating) {
      setIsAnimating(true);
      if (leaving) {
        RowVariants.exit = {
          x: clickedDirection === "forward" ? -width - 230 : width + 230,
        };
        setLeaving(false);
      }
      toggleLeaving();

      if (clickedDirection == "forward") {
        setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
        setOnGoing("forward");
      } else {
        setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
        setOnGoing("backward");
      }
      setTimeout(() => setIsAnimating(false), 1000);
    }
  }

  return (
    <ASlider key={queryKey}>
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

        <AnimatePresence
          initial={false}
          onExitComplete={() => setLeaving(true)}
        >
          <Row
            variants={RowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={`${queryKey}_${index}`}
            transition={{ type: "tween", duration: 1 }}
          >
            {data?.results
              .slice(1)
              .slice(offset * index, offset * index + offset)
              .map((video: any) => (
                <Box
                  layoutId={`${queryKey}_${video.id}`}
                  key={`${queryKey}_${video.id}`}
                  transition={{ type: "tween" }}
                  bgphoto={makeImgPath(video.backdrop_path, "w500")}
                ></Box>
              ))}
          </Row>
        </AnimatePresence>
      </Slider>
    </ASlider>
  );
}

export default SliderBox;
