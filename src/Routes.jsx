import { Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import MovieList from "./content pages/MovieList";
import MovieInfo from "./content pages/MovieInfo";
import WatchList from "./content pages/WatchList";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Body />}>
        <Route index element={<MovieList />} />
        <Route path="/movie/:movieid" element={<MovieInfo />} />
        <Route path="/watchlist" element={<WatchList />} />
      </Route>
    </Routes>
  );
}
