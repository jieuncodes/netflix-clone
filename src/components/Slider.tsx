import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useQuery } from "react-query";
import { getNowPlayingMovies, getTopRatedMovies, getTrending } from "../api";
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
  Ranking,
  RankedBox,
  RankedImgBox,
} from "../styles/Slider";
import { SliderBoxProps } from "../interfaces";
import {
  ipad11OuterWidth,
  ipad11Padding,
  mac24OuterWidth,
  mac24Padding,
  macbook14OuterWidth,
  macbook14Padding,
} from "../styles/layout";
import useWindowDimensions from "../components/WindowSize";
import { dividerClasses } from "@mui/material";

function SliderBox({ sliderType, title, section, queryKey }: SliderBoxProps) {
  const api =
    queryKey == "allNowPlaying"
      ? getNowPlayingMovies
      : queryKey == "allDayTrending"
      ? () => getTrending("all", "day")
      : getTopRatedMovies;

  const { data, isLoading } = useQuery([section, queryKey], api);
  const isIpad11 = useMediaQuery({ query: "(max-width: 1112px)" });
  const isMacBook14 = useMediaQuery({ query: "(max-width: 1645px)" });
  const width = useWindowDimensions();
  const [slidePage, setSlidePage] = useState(0);
  const [leaving, setLeaving] = useState(true);
  const [onGoing, setOnGoing] = useState("forward");
  const [clickedDirection, setClickedDirection] = useState("forward");
  const [isAnimating, setIsAnimating] = useState(false);

  const mediaPadding = isIpad11
    ? ipad11Padding
    : isMacBook14
    ? macbook14Padding
    : mac24Padding;
  const outerwidth = isIpad11
    ? ipad11OuterWidth
    : isMacBook14
    ? macbook14OuterWidth
    : mac24OuterWidth;

  const offset = isIpad11 ? 5 : 6;
  const totalVideos = data?.results.length - 1;
  const maxSlidePage = Math.floor(totalVideos / offset) - 1;

  const RowVariants = {
    hidden: {
      x:
        onGoing === "forward" && onGoing === clickedDirection
          ? width + outerwidth
          : -width - outerwidth,
    },
    visible: { x: 0 },
    exit: {},
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);

  function changeSlidePage(clickedDirection: "forward" | "backward") {
    if (data && !isAnimating) {
      setIsAnimating(true);
      if (leaving) {
        RowVariants.exit = {
          x:
            clickedDirection === "forward"
              ? -width - outerwidth
              : width + outerwidth,
        };
        setLeaving(false);
      }
      toggleLeaving();

      if (clickedDirection == "forward") {
        setSlidePage((prev) => (prev === maxSlidePage ? 0 : prev + 1));
        setOnGoing("forward");
      } else {
        setSlidePage((prev) => (prev === 0 ? maxSlidePage : prev - 1));
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
              changeSlidePage("backward");
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
              changeSlidePage("forward");
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
          {sliderType == "ranking" ? (
            <Row
              variants={RowVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              key={`${queryKey}_${slidePage}`}
              transition={{ type: "tween", duration: 1 }}
            >
              {data?.results
                .slice(1)
                .slice(offset * slidePage, offset * slidePage + offset)
                .map((video: any, index: number) => (
                  <RankedBox key={video.id}>
                    {offset * slidePage + index + 1 > 9 ? (
                      <Ranking style={{ fontSize: 200 }}>
                        {offset * slidePage + index + 1}
                      </Ranking>
                    ) : (
                      <Ranking style={{ fontSize: 220 }}>
                        {offset * slidePage + index + 1}
                      </Ranking>
                    )}
                    <RankedImgBox
                      layoutId={`${queryKey}_${video.id}`}
                      key={`${queryKey}_${video.id}`}
                      transition={{ type: "tween" }}
                      bgphoto={makeImgPath(video.poster_path)}
                    ></RankedImgBox>
                  </RankedBox>
                ))}
            </Row>
          ) : (
            <Row
              variants={RowVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              key={`${queryKey}_${slidePage}`}
              transition={{ type: "tween", duration: 1 }}
            >
              {data?.results
                .slice(1)
                .slice(offset * slidePage, offset * slidePage + offset)
                .map((video: any) => (
                  <Box
                    layoutId={`${queryKey}_${video.id}`}
                    key={`${queryKey}_${video.id}`}
                    transition={{ type: "tween" }}
                    bgphoto={makeImgPath(video.backdrop_path, "w500")}
                  ></Box>
                ))}
            </Row>
          )}
        </AnimatePresence>
        2
      </Slider>
    </ASlider>
  );
}

export default SliderBox;
