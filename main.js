import Header from "./components/Header/Header/Header";
import Movies from "./components/Header/Movies/Movies";
import Filters from "./components/Header/Filters/Filters";
import Footer from "./components/Header/Footer/Footer";
import Acercade from "./components/Header/Acercade/Acercade";
import Contacto from "./components/Header/Contacto/Contacto"; 
import { fetchMovies, fetchSearchResults } from "./components/Header/api/api";

const app = document.querySelector("#app");

const searchFunction = async () => {
  const searchQuery = document.querySelector("#search").value;
  if (searchQuery) {
    const searchResults = await fetchSearchResults(searchQuery); 
    renderMovies(searchResults); 
  } else {
    const movies = await fetchMovies();
    renderMovies(movies); 
  }
};

const renderMovies = (movies) => {
  const moviesContainer = document.querySelector("#movies");
  
  const filteredMovies = movies.filter(movie => movie.poster_path);

  moviesContainer.innerHTML = Movies(filteredMovies);
};

const FilterChange = async () => {
  const selectedFilter = document.querySelector("#filter-select").value;
  let filteredMovies = [];

  if (selectedFilter === "topRated") {
    filteredMovies = await fetchMovies();
    filteredMovies = filteredMovies.filter((movie) => movie.vote_average > 8);
  } else if (selectedFilter === "popular") {
    filteredMovies = await fetchMovies();
    filteredMovies = filteredMovies.filter((movie) => movie.popularity > 1000);
  } else {
    filteredMovies = await fetchMovies(selectedFilter);
  }

  renderMovies(filteredMovies);
};

const renderContent = async () => {
  const hash = window.location.hash; 
  const searchBar = document.querySelector("#search");

  if (hash === "#acerca-de" || hash === "#contacto") {
    if (searchBar) {
      searchBar.style.display = "none";
    }

    if (hash === "#acerca-de") {
      app.innerHTML = `
        ${Header()}
        ${Acercade()}
        ${Footer()}
      `;
    } else if (hash === "#contacto") {
      app.innerHTML = `
        ${Header()}
        ${Contacto()}
        ${Footer()}
      `;
    }
  } else {
    if (searchBar) {
      searchBar.style.display = "block";
    }

    const movies = await fetchMovies();
    app.innerHTML = `
      ${Header()}
      ${Filters()}
      <section id="movies">${Movies(movies)}</section>
      ${Footer()}
    `;

    const filterSelect = document.querySelector("#filter-select");

    filterSelect.addEventListener("change", FilterChange);
    searchInput.addEventListener("input", searchFunction);
  }
};

window.addEventListener("hashchange", renderContent);

renderContent();
