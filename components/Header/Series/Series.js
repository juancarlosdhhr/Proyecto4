import './Series.css';

const Series = (series) => `
<section id="series">
  <h2>Series</h2>
  <ul>
    ${series.map((show) => `
      <li>
        <img src="https://image.tmdb.org/t/p/w500${show.poster_path}" alt="${show.name}" />
        <h3>${show.name}</h3>
        <p>Año: ${new Date(show.first_air_date).getFullYear()}</p>
        <p>Valoración: ${show.vote_average}</p>
      </li>
    `).join('')}
  </ul>
</section>
`;

export default Series;
