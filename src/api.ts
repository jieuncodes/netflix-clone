import { getTredingProps, IApiMap } from "./interfaces";

const BASE_PATH = "https://api.themoviedb.org/3";
const API_KEY = "f5fdd54050b9eb7a6f0bf987a10e4052";

export async function getNowPlayingMovies() {
  const response = await fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`
  );
  return await response.json();
}
export async function getTrending(mediaType: string, timeWindow: string) {
  const response = await fetch(
    `${BASE_PATH}/trending/${mediaType}/${timeWindow}?api_key=${API_KEY}`
  );
  return await response.json();
}

export async function getTopRatedMovies() {
  const response = await fetch(
    `${BASE_PATH}/movie/top_rated?api_key=${API_KEY}`
  );
  return await response.json();
}

export async function getTopRatedTvShows() {
  const response = await fetch(`${BASE_PATH}/tv/top_rated?api_key=${API_KEY}`);
  return await response.json();
}

export const apiMap: IApiMap = {
  allNowPlaying: getNowPlayingMovies,
  allDayTrending: () => getTrending("all", "day"),
  tvTopRated: getTopRatedTvShows,
  tvDayTrending: () => getTrending("tv", "day"),
  default: getTopRatedMovies,
};
