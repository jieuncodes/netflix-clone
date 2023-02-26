export interface IMenuItem {
  url: string;
  text: string;
}
export interface IForm {
  keyword: string;
}

export interface SliderBoxProps {
  sliderType: "list" | "ranking";
  title: string;
  section: "all" | "movies" | "tv";
  queryKey: "allNowPlaying" | "allDayTrending" | "moviesTopRated";
}

export interface getTredingProps {
  mediaType: string;
  timeWindow: string;
}
