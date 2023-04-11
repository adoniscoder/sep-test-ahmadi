import api from "./api";
import { MovieSearchRes } from "@/models";

export const getMovies = (): Promise<MovieSearchRes> => {
  return api.get(`?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=all`);
};
