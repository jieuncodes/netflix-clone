import { showFullTextAtom } from "../atom";
import { makeImgPath } from "../utils";
import CutAfterColon from "../components/CutAfterColon";
import ShortenedText from "../components/ShortendText";

import {
  Banner,
  BannerCover,
  BannerWrapper,
  Info,
  OverView,
  Title,
} from "../styles/Home";
import { useRecoilValue } from "recoil";

function BannerArea(data: any, bannerVideoTitle: string) {
  const showFullText = useRecoilValue(showFullTextAtom);
  const title =
    bannerVideoTitle == "original_title"
      ? data?.data.results[0].original_title
      : data?.data.results[0].original_name;
  console.log("title", typeof bannerVideoTitle);
  return (
    <BannerWrapper>
      <BannerCover>
        <Info>
          <Title>{CutAfterColon(title)}</Title>
          <OverView>
            {ShortenedText(data?.data.results[0].overview, 150, showFullText)}
          </OverView>
        </Info>
      </BannerCover>
      <Banner
        bgphoto={makeImgPath(data?.data.results[0].backdrop_path || "")}
      ></Banner>
    </BannerWrapper>
  );
}
export default BannerArea;
