import Axios from "axios";

const api = Axios.create({
  baseURL: `http://www.omdbapi.com/?token=${process.env.REACT_APP_OMDB_API_KEY}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
