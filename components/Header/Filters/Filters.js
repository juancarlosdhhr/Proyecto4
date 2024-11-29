import "./Filters.css";

const Filters = () => `
  <div id="filters">
    <label for="filter-select">Filtrar por:</label>
    <select id="filter-select">
      <option value="topRated">Más valoradas</option>
      <option value="popular">Populares</option>
    </select>
  </div>
`;

export default Filters;
