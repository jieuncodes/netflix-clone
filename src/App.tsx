import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home";
import Movies from "./routes/Movies";
import NewAndPopular from "./routes/New";
import Tv from "./routes/TV";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tv" element={<Tv />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/new" element={<NewAndPopular />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
