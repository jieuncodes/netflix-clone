export interface IForm {
  keyword: string;
}

export interface SliderBoxProps {
  title: string;
  section: "all" | "movies" | "tv";
  queryKey: "allNowPlaying" | "allDayTrending";
}
export interface getTredingProps {
  mediaType: string;
  timeWindow: string;
}
