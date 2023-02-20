import { useState } from "react";
import { useQuery } from "react-query";
import { getMovies } from "../api";
import { Banner, Loader, Wrapper } from "../styles/Home";
import { makeImgPath } from "../utils";

function Home() {
  const { data, isLoading } = useQuery(["movies", "nowPlaying"], getMovies);
  console.log(data, isLoading);
  const [index, setIndex] = useState(0);
  const increaseIndex = () => setIndex((prev) => prev + 1);

  return <Wrapper>
    {isLoading ? (
      <Loader><span>Loading...</span></Loader>
    ) : (
      <>
        <Banner onClick={increaseIndex} bgPhoto={makeImgPath(data?.results[0].backdrop_path || "")}></Banner>
      </>
    )}
  </Wrapper>;
}
export default Home;
