import { useQuery } from "react-query";
import { getMovies } from "../api";
import { showFullTextAtom } from "../atom";
import { makeImgPath } from "../utils";
import CutAfterColon from "../components/CutAfterColon";
import ShortenedText from "../components/ShortendText";
import SliderBox from "../components/Slider";

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
import { useRecoilValue } from "recoil";
import { SliderArea } from "../styles/Slider";

function Home() {
  const { data, isLoading } = useQuery(["movies", "nowPlaying"], getMovies);
  console.log(data, isLoading);
  const showFullText = useRecoilValue(showFullTextAtom);

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>
          <span>Loading...</span>
        </Loader>
      ) : (
        <>
          <BannerWrapper>
            <BannerCover>
              <Info>
                <Title>{CutAfterColon(data?.results[0].original_title)}</Title>
                <OverView>
                  {ShortenedText(data?.results[0].overview, 150, showFullText)}
                </OverView>
              </Info>
            </BannerCover>
            <Banner
              bgphoto={makeImgPath(data?.results[0].backdrop_path || "")}
            ></Banner>
          </BannerWrapper>
          <SliderArea>
            <SliderBox title="Now Playing" />
            {/* <SliderBox title="Trending Now" /> */}
          </SliderArea>
        </>
      )}
    </Wrapper>
  );
}
export default Home;
