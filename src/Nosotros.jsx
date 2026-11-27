import "./Nosotros.css";

// Cambia estas rutas por tus imágenes reales
import imgHistoria from "./assets/mpa.jpeg";
import imgProceso from "./assets/orga.jpeg";
import imgEcoPeel from "./assets/78.png";

function Nosotros() {
  return (
    <>
    
      {/* Misión - Visión */}
      <section className="container py-5">

        <div className="section-title">
          <h2>Nuestra Filosofía</h2>
          <p>Construyendo un futuro más sostenible</p>
        </div>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="info-card">
              <img
                src={imgProceso}
                alt="Filosofía"
                className="card-img"
              />

              <h3>Filosofía</h3>

              <p>
                Aprovechar los residuos orgánicos mediante procesos de
                innovación, investigación y diseño para generar valor
                ambiental, social y económico.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="info-card">
              <img
                src={imgEcoPeel}
                alt="Misión"
                className="card-img"
              />

              <h3>Misión</h3>

              <p>
                Crear productos biodegradables a partir de cáscaras de
                cítricos, promoviendo la sustentabilidad y la economía
                circular.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="info-card">
              <img
                src={imgHistoria}
                alt="Visión"
                className="card-img"
              />

              <h3>Visión</h3>

              <p>
                Ser una organización reconocida por transformar residuos
                orgánicos en productos innovadores con valor agregado.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Valores */}
      <section className="valores-section">

        <div className="container">

          <div className="section-title">
            <h2>Valores</h2>
            <p>Principios que guían BioVida</p>
          </div>

          <div className="row g-4 text-center">

            <div className="col-md-3">
              <div className="valor-card">
                🌱
                <h5>Sustentabilidad</h5>
              </div>
            </div>

            <div className="col-md-3">
              <div className="valor-card">
                ♻️
                <h5>Responsabilidad</h5>
              </div>
            </div>

            <div className="col-md-3">
              <div className="valor-card">
                💡
                <h5>Innovación</h5>
              </div>
            </div>

            <div className="col-md-3">
              <div className="valor-card">
                🤝
                <h5>Trabajo en Equipo</h5>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Propósitos */}
      <section className="container py-5">

        <div className="section-title">
          <h2>Nuestro Propósito</h2>
        </div>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="purpose-card">
              <h3>Social</h3>

              <p>
                Crear conciencia sobre el aprovechamiento de residuos
                orgánicos y promover hábitos de consumo responsable.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="purpose-card">
              <h3>Técnico</h3>

              <p>
                Perfeccionar continuamente EcoPeel para mejorar resistencia,
                apariencia, funcionalidad y calidad.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="purpose-card">
              <h3>Económico</h3>

              <p>
                Desarrollar un modelo sostenible que permita mantener y
                ampliar el proyecto BioVida.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="cta-biovida">

        <div className="container text-center">

          <h2>
            Da una segunda vida a las cáscaras de cítricos
          </h2>

          <p>
            Innovación, sustentabilidad y economía circular en un solo
            proyecto.
          </p>

  

        </div>

      </section>
    </>
  );
}

export default Nosotros;