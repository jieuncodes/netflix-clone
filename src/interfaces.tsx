export interface IMenuItem {
  url: string;
  text: string;
}
export interface IForm {
  keyword: string;
}
export interface IApiMap {
  [key: string]: () => Promise<any>;
}
export interface SliderBoxProps {
  sliderType: "list" | "ranking";
  title: string;
  section: "all" | "movies" | "tv";
  queryKey:
    | "allNowPlaying"
    | "allDayTrending"
    | "moviesTopRated"
    | "tvTopRated"
    | "tvDayTrending";
}

export interface getTredingProps {
  mediaType: string;
  timeWindow: string;
}
