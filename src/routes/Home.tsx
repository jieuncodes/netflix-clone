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
  Info,
  Loader,
  OverView,
  Title,
  Wrapper,
} from "../styles/Home";
import { makeImgPath } from "../utils";

function Home() {
  const { data, isLoading } = useQuery(["movies", "nowPlaying"], getMovies);
  console.log(data, isLoading);
  const [index, setIndex] = useState(0);
  const [showFullText, setShowFullText] = useRecoilState(showFullTextAtom);

  const increaseIndex = () => setIndex((prev) => prev + 1);

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
        </>
      )}
    </Wrapper>
  );
}
export default Home;
