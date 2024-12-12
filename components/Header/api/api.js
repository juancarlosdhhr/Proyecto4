

const API_KEY = "21ce143a3f35691c640e521c84883223";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const fetchSearchResults = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
  const data = await response.json();
  return data.results;
};

