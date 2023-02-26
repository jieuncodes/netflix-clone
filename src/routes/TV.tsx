import { useQuery } from "react-query";
import { getNowPlayingMovies, getTrending } from "../api";
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

function Tv() {
  const { data, isLoading } = useQuery(["tv", "trending"], () =>
    getTrending("tv", "day")
  );
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
                <Title>{CutAfterColon(data?.results[0].original_name)}</Title>
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
            <SliderBox
              sliderType="ranking"
              title="Today Top Rated TV Shows"
              section="tv"
              queryKey="tvTopRated"
            />
            <SliderBox
              sliderType="list"
              title="Trending TV shows"
              section="tv"
              queryKey="tvDayTrending"
            />
          </SliderArea>
        </>
      )}
    </Wrapper>
  );
}
export default Tv;
