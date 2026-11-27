
import fondo from "./assets/fondo.jpg";
import hero from "./assets/run.jpeg";
import dey from "./assets/br.jpeg";

function Carousel() {
  return (
    <section
      id="carouselBiovida"
      className="carousel slide carousel-biovida"
      data-bs-ride="carousel"
      data-bs-interval="5000"
    >

      {/* INDICADORES */}
      <div className="carousel-indicators">

        <button
          type="button"
          data-bs-target="#carouselBiovida"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Diapositiva 1"
        />

        <button
          type="button"
          data-bs-target="#carouselBiovida"
          data-bs-slide-to="1"
          aria-label="Diapositiva 2"
        />

        <button
          type="button"
          data-bs-target="#carouselBiovida"
          data-bs-slide-to="2"
          aria-label="Diapositiva 3"
        />

      </div>

      <div className="carousel-inner">

        {/* SLIDE 1 */}
        <div className="carousel-item active">

          <img
            src={fondo}
            className="carousel-biovida-img"
            alt="Innovación ecológica BIOVIDA"
          />

          <div className="carousel-overlay"></div>

          <div className="container carousel-container">
            <div className="carousel-caption-biovida">

              <span className="hero-badge">
                <i className="bi bi-leaf-fill"></i>
                INNOVACIÓN SUSTENTABLE
              </span>

              <h1>
                Un futuro más verde
                <span> comienza hoy.</span>
              </h1>

              <p>
                Transformamos residuos cítricos en productos
                ecológicos para cuidar nuestro planeta.
              </p>

              <div className="hero-actions">

                <a href="/#productos" className="hero-carousel-btn">
                  Explorar productos
                  <i className="bi bi-arrow-right"></i>
                </a>

                <a href="/#nosotros" className="hero-secondary-btn">
                  Conoce BIOVIDA
                </a>

              </div>

            </div>
          </div>

        </div>

        {/* SLIDE 2 */}
        <div className="carousel-item">

          <img
            src={hero}
            className="carousel-biovida-img"
            alt="Materiales sustentables"
          />

          <div className="carousel-overlay"></div>

          <div className="container carousel-container">
            <div className="carousel-caption-biovida">

              <span className="hero-badge">
                <i className="bi bi-recycle"></i>
                ECONOMÍA CIRCULAR
              </span>

              <h1>
                Los residuos
                <span> tienen otra vida.</span>
              </h1>

              <p>
                Aprovechamos los recursos naturales para crear
                alternativas responsables e innovadoras.
              </p>

              <div className="hero-actions">

                <a href="/#nosotros" className="hero-carousel-btn">
                  Nuestra historia
                  <i className="bi bi-arrow-right"></i>
                </a>

              </div>

            </div>
          </div>

        </div>

        {/* SLIDE 3 */}
        <div className="carousel-item">

          <img
            src={dey}
            className="carousel-biovida-img"
            alt="Productos BIOVIDA"
          />

          <div className="carousel-overlay"></div>

          <div className="container carousel-container">
            <div className="carousel-caption-biovida">

              <span className="hero-badge">
                <i className="bi bi-heart-fill"></i>
                HECHO EN MÉXICO
              </span>

              <h1>
                Innovación con
                <span> propósito.</span>
              </h1>

              <p>
                Creamos productos ecológicos y artesanales
                que impulsan un consumo más consciente.
              </p>

              <div className="hero-actions">

                <a href="/#next-steps" className="hero-carousel-btn">
                  Contáctanos
                  <i className="bi bi-arrow-right"></i>
                </a>

              </div>

            </div>
          </div>

        </div>

      </div>

      {/* FLECHAS */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselBiovida"
        data-bs-slide="prev"
        aria-label="Anterior"
      >
        <span className="carousel-arrow">
          <i className="bi bi-chevron-left"></i>
        </span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselBiovida"
        data-bs-slide="next"
        aria-label="Siguiente"
      >
        <span className="carousel-arrow">
          <i className="bi bi-chevron-right"></i>
        </span>
      </button>

    </section>
  );
}

export default Carousel;
