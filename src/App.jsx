import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import heroImg from "./assets/hero.png";
import imgHistoria from "./assets/hero.png";
import Dio from "./assets/dio.png";

import "./App.css";

import Nav from "./Nav";
import Carousel from "./src/Carousel";
import Nosotros from "./Nosotros";
import Productos from "./Productos";
import Carrito from "./Carrito";


function Inicio() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Carousel />

      <section className="beneficios-section">
  <div className="container">

    <div className="beneficios-grid">

      <div className="beneficio-card">
        <div className="beneficio-icon">♻️</div>
        <span>Aprovecha residuos cítricos</span>
      </div>

      <div className="beneficio-card">
        <div className="beneficio-icon">🌱</div>
        <span>Reduce el impacto ambiental</span>
      </div>

      <div className="beneficio-card">
        <div className="beneficio-icon">🧡</div>
        <span>Producto artesanal y único</span>
      </div>

      <div className="beneficio-card">
        <div className="beneficio-icon">🚚</div>
        <span>Envíos a todo México</span>
      </div>

    </div>

  </div>
</section>
      {/* HERO */}
      <section id="nosotros" className="nosotros-hero">

        <div className="container">

          <div className="row align-items-center min-vh-75">

            <div className="col-lg-6">

              <span className="badge-bio">
                Innovación Sustentable
              </span>

              <h1 className="hero-title">
                Transformamos residuos cítricos en productos ecológicos
              </h1>

              <p className="hero-text">
                En BIOVIDA utilizamos residuos orgánicos para crear
                materiales innovadores, biodegradables y visualmente
                atractivos que ayudan a reducir el impacto ambiental.
              </p>

              <div className="hero-buttons">



  <Link
    to="/nosotros"
    className="hero-btn-outline"
  >
    Conocer más
  </Link>

</div>

              <div className="hero-stats">

                <div>
                  <h3>100%</h3>
                  <p>Biodegradable</p>
                </div>

                <div>
                  <h3>Eco</h3>
                  <p>Material Sustentable</p>
                </div>

                <div>
                  <h3>MX</h3>
                  <p>Hecho en México</p>
                </div>

              </div>

            </div>

            <div className="col-lg-6 text-center">

              <img
                src={Dio}
                alt="BIOVIDA"
                className="img-fluid hero-image"
              />

            </div>

          </div>

        </div>

      </section>

      {/* PRODUCTOS */}
      <section id="productos">
        <Productos />
      </section>

      {/* CTA PRINCIPAL */}

      <section className="cta-biovida text-center">

        <div className="container">

          <h2>
            Construyamos un futuro más sustentable
          </h2>

          <p className="mt-3">
            Cada producto ayuda a dar una segunda vida a los residuos
            cítricos y contribuye a un planeta más limpio.
          </p>

          <Link
            to="/nosotros"
            className="btn cta-btn"
          >
            Descubrir más
          </Link>

        </div>

      </section>

      {/* CONTADOR */}

      <section className="container text-center my-5">

        <button
          className="btn btn-success"
          onClick={() => setCount(count + 1)}
        >
          Me gusta BIOVIDA ❤️ {count}
        </button>

      </section>

      {/* CONTACTO */}

      <section id="next-steps">

        <div id="docs">

          <h2>Contáctanos</h2>

          <p>
            Estamos listos para ayudarte y resolver tus dudas.
          </p>

          <ul>

            <li>
              <a href="mailto:biovidaecopeel@gmail.com">
                📧 biovidaecopeel@gmail.com
              </a>
            </li>

            <li>
              <a href="tel:+52 1 81 1414 6861">
                📞 +52 1 81 1414 6861
              </a>
            </li>

            <li>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                📍 Nuevo León, México
              </a>
            </li>

          </ul>

        </div>

        <div id="social">

          <h2>Síguenos</h2>

          <p>
            Conoce nuestras novedades y lanzamientos.
          </p>

          <ul>

            <li>
              <a
                href="https://www.instagram.com/biovidamex?cnvx=dTg3endnbnFna2ts"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>

            <li>
              <a
                href="https://wa.me/+52 1 81 1414 6861"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>

            <li>
              <a
                href="https://www.tiktok.com/@biovida.ecopeel?_r=1&_t=ZS-9BiehZZMt9T"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
            </li>

          </ul>

        </div>

      </section>
    </>
  );
}

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/carrito" element={<Carrito />} />
        
      </Routes>
    </>
  );
}

export default App;