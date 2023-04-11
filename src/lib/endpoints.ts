import api from "./api";
import { MovieSearchRes } from "@/models";

export const getMovies = (): Promise<MovieSearchRes> => {
  return api.get("&s=all");
};
