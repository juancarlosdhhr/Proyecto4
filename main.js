import Header from "./components/Header/Header/Header";
import Movies from "./components/Header/Movies/Movies";
import Filters from "./components/Header/Filters/Filters";
import Footer from "./components/Header/Footer/Footer"; 
import { fetchMovies, fetchSearchResults } from "./components/Header/api/api"; 

const app = document.querySelector("#app");

const handleSearch = async () => {
  const searchQuery = document.querySelector("#search").value;
  const searchResults = searchQuery ? await fetchSearchResults(searchQuery) : await fetchMovies();
  renderMovies(searchResults);
};

const renderMovies = (movies) => {
  const moviesContainer = document.querySelector("#movies");
  moviesContainer.innerHTML = Movies(movies);
};

const handleFilterChange = async () => {
  const selectedFilter = document.querySelector("#filter-select").value;
  let filteredMovies = [];

  if (selectedFilter === "topRated") {
    filteredMovies = (await fetchMovies()).filter((movie) => movie.vote_average > 8);
  } else if (selectedFilter === "popular") {
    filteredMovies = (await fetchMovies()).filter((movie) => movie.popularity > 1000);
  } else {
    filteredMovies = await fetchMovies();
  }

  renderMovies(filteredMovies);
};

const init = async () => {
  const movies = await fetchMovies();
  app.innerHTML = `
    ${Header()}
    ${Filters()}
    <section id="movies">${Movies(movies)}</section>
    ${Footer()}
  `;

  document.querySelector("#filter-select").addEventListener("change", handleFilterChange);
  document.querySelector("#search").addEventListener("input", handleSearch);
};

init();
