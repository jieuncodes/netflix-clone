const BASE_PATH = "https://api.themoviedb.org/3";
const API_KEY = "f5fdd54050b9eb7a6f0bf987a10e4052";

export async function getMovies() {
  const response = await fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`
  );
  return await response.json();
}
