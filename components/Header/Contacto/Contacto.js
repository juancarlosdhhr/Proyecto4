import "./Contacto.css";

const Contacto = () => `
  <section id="contacto">
    <form>
      <input type="text" placeholder="Tu nombre" required />
      <input type="email" placeholder="Tu correo electrónico" required />
      <textarea rows="4" placeholder="Escríbenos y nos pondremos en contacto contigo con la mayor brevedad" required></textarea>
      <button type="submit">Enviar</button>
    </form>
  </section>
`;

export default Contacto;
