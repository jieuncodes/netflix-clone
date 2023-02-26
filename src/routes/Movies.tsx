import { useQuery } from "react-query";
import { getNowPlayingMovies, getTrending } from "../api";
import { showFullTextAtom } from "../atom";
import SliderBox from "../components/Slider";

import { Loader, Wrapper } from "../styles/Home";
import { useRecoilValue } from "recoil";
import { SliderArea } from "../styles/Slider";
import BannerArea from "../components/Banner";

function Movies() {
  const { data, isLoading } = useQuery(["tv", "trending"], () =>
    getTrending("movie", "day")
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
          <BannerArea data={data} bannerVideoTitle="original_title" />
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
export default Movies;
