import { useQuery } from "react-query";
import queryKeys from "./queryKeys";
import { Endpoints } from "@/lib";

const useGetMovies = () => {
  return useQuery([queryKeys.getMovies], Endpoints.getMovies);
};

export default useGetMovies;
