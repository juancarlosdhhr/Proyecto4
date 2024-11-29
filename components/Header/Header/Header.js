import "./Header.css";

const Header = () => `
  <header>
    <img src="https://scontent.flpa2-1.fna.fbcdn.net/v/t39.30808-6/310052158_577259394401040_8640970566345185867_n.png?stp=dst-png_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=mHr0ZZ2KYbUQ7kNvgEtFCfq&_nc_zt=23&_nc_ht=scontent.flpa2-1.fna&_nc_gid=AKTn-sNaXTZPe9Eq-HleVu9&oh=00_AYCLnf9GgFBWiLvqX_BFr_6isClykqWBzN86u2Xm0LwoOA&oe=674FE1E2" alt="Logo" class="logo" />
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
