import "./MovieTile.scss";

type Props = {
  posterUrl: string;
  title: string;
};

const MovieTile = ({ posterUrl, title }: Props) => {
  return (
    <div className="tile">
      <img src={posterUrl} alt={title} />
      <p className="movieTitle">{title}</p>
    </div>
  );
};

export default MovieTile;
