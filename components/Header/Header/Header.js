import "./Header.css";

const Header = () => `
  <header>
    <img src="logo.png" alt="Logo" class="logo" />
    <nav>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Películas</a></li>
        <li><a href="#">Series</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
    <input type="text" id="search" placeholder="Busca una película o serie" />
  </header>
`;

export default Header;
