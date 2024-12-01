import Header from "./components/Header/Header/Header";
import Movies from "./components/Header/Movies/Movies";
import Filters from "./components/Header/Filters/Filters";
import Footer from "./components/Header/Footer/Footer"; 
import { fetchMovies, fetchSearchResults } from "./components/Header/api/api"; // Nueva función para búsqueda

const app = document.querySelector("#app");

// Función para la búsqueda
const searchFunction = async () => {
  const searchQuery = document.querySelector("#search").value;
  if (searchQuery) {
    // Si hay texto en el buscador, realizamos la búsqueda
    const searchResults = await fetchSearchResults(searchQuery);
    renderMovies(searchResults);  // Renderizamos los resultados de la búsqueda
  } else {
    // Si no hay texto, mostramos todas las películas
    const movies = await fetchMovies();
    renderMovies(movies);
  }
};

// Renderizar películas o series
const renderMovies = (movies) => {
  const moviesContainer = document.querySelector("#movies");
  moviesContainer.innerHTML = Movies(movies);
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
    // Filtros por género
    filteredMovies = await fetchMovies(selectedFilter);
  }

  renderMovies(filteredMovies);
};

//Función para inicializar la página 
const buildWebsite = async () => {
  const movies = await fetchMovies();
  app.innerHTML = `
    ${Header()}
    ${Filters()}
    <section id="movies">${Movies(movies)}</section>
    ${Footer()}
  `;

  const filterSelect = document.querySelector("#filter-select");
  const searchInput = document.querySelector("#search");

  // Detectamos cambios en el filtro y el buscador
  filterSelect.addEventListener("change", FilterChange);
  searchInput.addEventListener("input", searchFunction); // Detectamos lo que escribe el usuario en el buscador
};

buildWebsite();
