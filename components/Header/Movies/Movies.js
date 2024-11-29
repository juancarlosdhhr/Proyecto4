import './Movies.css';

const Movies = (movies) => `
  <section id="movies">
    <h2>Películas y Series</h2>
    <div class="movie-list">
      ${movies.map(movie => `
        <div class="movie-item">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
          <h3>${movie.title}</h3>
          <p>Año: ${new Date(movie.release_date).getFullYear()}</p>
        </div>
      `).join('')}
    </div>
  </section>
`;

export default Movies;
