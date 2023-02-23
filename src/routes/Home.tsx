import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { getMovies } from "../api";
import { showFullTextAtom } from "../atom";
import CutAfterColon from "../components/CutAfterColon";
import ShortenedText from "../components/ShortendText";
import {
  Banner,
  BannerCover,
  BannerWrapper,
  Box,
  Info,
  Loader,
  OverView,
  Row,
  Slider,
  SliderTitle,
  Title,
  Wrapper,
} from "../styles/Home";
import { makeImgPath } from "../utils";

function Home() {
  const { data, isLoading } = useQuery(["movies", "nowPlaying"], getMovies);
  console.log(data, isLoading);
  const [index, setIndex] = useState(0);
  const [showFullText, setShowFullText] = useRecoilState(showFullTextAtom);
  const [leaving, setLeaving] = useState(false);
  const toggleLeaving = () => setLeaving((prev) => !prev);
  const offset = 6;
  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>
          <span>Loading...</span>
        </Loader>
      ) : (
        <>
          <BannerWrapper>
            <BannerCover onClick={increaseIndex}>
              <Info>
                <Title>{CutAfterColon(data?.results[0].original_title)}</Title>
                <OverView>
                  {ShortenedText(data?.results[0].overview, 150, showFullText)}
                </OverView>
              </Info>
            </BannerCover>
            <Banner
              bgPhoto={makeImgPath(data?.results[0].backdrop_path || "")}
            ></Banner>
          </BannerWrapper>
          <Slider>
            <SliderTitle>Now Playing</SliderTitle>
            <AnimatePresence>
              <Row>
                {data?.results
                  .slice(1)
                  .slice(offset)
                  .map((movie: any) => (
                    <Box
                      layoutId={movie.id + ""}
                      key={movie.id}
                      transition={{ type: "tween" }}
                      bgPhoto={makeImgPath(movie.backdrop_path, "w500")}

                    ></Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Wrapper>
  );
}
export default Home;
