import "./Header.css";

const Header = () => `
  <header>
    <img src="../../assets/logocinema.jpg" alt="Logo" class="logo" />
    <nav>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#acerca-de" id="peliculas">Acerca de</a></li>
         <li><a href="#contacto" id="peliculas">Contacto</a></li>
        
      
      </ul>
    </nav>
   <input type="text" id="search" class="searchbar" placeholder="Busca una película" />


  </header>
`;

export default Header;
