import Header from "./components/Header/Header/Header";
import Movies from "./components/Header/Movies/Movies";
import Filters from "./components/Header/Filters/Filters";
import Footer from "./components/Header/Footer/Footer";
import Acercade from "./components/Header/Acercade/Acercade";
import Contacto from "./components/Header/Contacto/Contacto";
import { fetchMovies, fetchSearchResults } from "./components/Header/api/api";

const app = document.querySelector("#app");

const handleSearch = async () => {
  const query = document.querySelector("#search").value;
  const results = query ? await fetchSearchResults(query) : await fetchMovies();
  displayMovies(results);
};

const displayMovies = (movies) => {
  const container = document.querySelector("#movies");
  const validMovies = movies.filter((movie) => movie.poster_path);
  container.innerHTML = Movies(validMovies);
};

const handleFilterChange = async () => {
  const filter = document.querySelector("#filter-select").value;
  let movies = await fetchMovies();

  if (filter === "topRated") {
    movies = movies.filter((movie) => movie.vote_average > 8);
  } else if (filter === "popular") {
    movies = movies.filter((movie) => movie.popularity > 1000);
  }

  displayMovies(movies);
};

const updateContent = async () => {
  const currentPage = window.location.hash;

  
  app.innerHTML = `
    ${Header()}
    ${
      currentPage === "#acerca-de"
        ? Acercade()
        : currentPage === "#contacto"
        ? Contacto()
        : `${Filters()}<section id="movies"></section>`
    }
    ${Footer()}
  `;

  
  const searchInput = document.querySelector("#search");
  if (searchInput) {
    if (currentPage === "#acerca-de" || currentPage === "#contacto") {
      searchInput.style.display = "none"; 
    } else {
      searchInput.style.display = "block"; 
    }
  }

 
  if (!["#acerca-de", "#contacto"].includes(currentPage)) {
    const movies = await fetchMovies();
    displayMovies(movies);

    document.querySelector("#filter-select").addEventListener("change", handleFilterChange);
    document.querySelector("#search").addEventListener("input", handleSearch);
  }
};

window.addEventListener("hashchange", updateContent);

updateContent();
