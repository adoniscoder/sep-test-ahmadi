import Axios from "axios";

const api = Axios.create({
  baseURL: `http://www.omdbapi.com`,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use((response) => {
  return response.data;
});

export default api;
