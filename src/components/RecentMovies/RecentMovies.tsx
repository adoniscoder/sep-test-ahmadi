import "./RecentMovies.scss";
import { Movie } from "@/models";
import MovieTile from "../MovieTile/MovieTile";

type Props = {
  movies?: Movie[];
};

const RecentMovies = ({ movies }: Props) => {
  return (
    <section className="recentMoviesContainer">
      <h3 className="title">Recent Movies</h3>
      <div className="tilesContainer">
        {movies?.map((movie, index) => {
          return (
            <MovieTile
              key={index}
              title={movie.Title}
              posterUrl={movie.Poster}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RecentMovies;
