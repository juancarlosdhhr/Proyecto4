import './Movies.css';

// Función para generar las estrellas según la puntuación
const renderStars = (rating) => {
  const maxStars = 5;
  const filledStars = Math.round(rating / 2); // Escala de 1-10 a 1-5
  let starsHtml = '';

  for (let i = 1; i <= maxStars; i++) {
    if (i <= filledStars) {
      starsHtml += '★'; // Estrella rellena
    } else {
      starsHtml += '☆'; // Estrella vacía
    }
  }

  return starsHtml;
};

const Movies = (movies) => `
  <section id="movies">
    <h2>Aquí encontrarás las valoraciones de un inmenso catálogo de películas</h2>
    <div class="movie-list">
      ${movies.map(movie => `
        <div class="movie-item" onclick="showMovieDetails(${movie.id})">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
          <h3>${movie.title}</h3>
          <p>Año: ${new Date(movie.release_date).getFullYear()}</p>
          <p class= "stars"> ${renderStars(movie.vote_average)}</p> 
        </div>
      `).join('')}
    </div>
  </section>
`;

export default Movies;
