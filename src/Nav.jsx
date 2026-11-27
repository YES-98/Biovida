
import "./App.css";
import logo from "./assets/78.png";
import { Link } from "react-router-dom";
import { useCarrito } from "./CarritoContext";

function Nav() {
  const { totalProductos } = useCarrito();

  return (
    <header className="biovida-header">

      <nav className="navbar navbar-top">
        <div className="container">

          <Link to="/" className="logo-biovida">
            <img src={logo} alt="Logo BIOVIDA" className="logo-img" />

            <div className="logo-text">
              <h1 className="logo-title">BIOVIDA</h1>
              <span className="logo-subtitle">
                SALUD Y SUSTENTABILIDAD
              </span>
            </div>
          </Link>

          <span className="header-message">
            <i className="bi bi-leaf"></i>
            Un futuro más sustentable
          </span>

        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-menu">
        <div className="container">

          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuBiovida"
            aria-controls="menuBiovida"
            aria-expanded="false"
            aria-label="Abrir menú"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="menuBiovida"
          >
            <ul className="navbar-nav align-items-lg-center">

              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#nosotros">
                  Nosotros
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#productos">
                  Productos
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#next-steps">
                  Contacto
                </a>
              </li>

              <li className="nav-item">
                <Link to="/carrito" className="nav-link cart-menu">
                  <i className="bi bi-cart3"></i>
                  <span>Carrito</span>

                  <span className="cart-badge">
                    {totalProductos}
                  </span>
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>

    </header>
  );
}

export default Nav;
