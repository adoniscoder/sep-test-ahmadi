export type MovieSearchRes = {
  Search: Movie[];
};

export type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};
