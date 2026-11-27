
import { useState } from "react";
import { useCarrito } from "./CarritoContext";
import "./App.css";

function Carrito() {

  const {
    carrito,
    aumentarCantidad,
    disminuirCantidad,
    eliminarProducto,
    vaciarCarrito,
    totalPrecio
  } = useCarrito();

  const [mostrarModal, setMostrarModal] = useState(false);

  const comprar = () => {
    if (carrito.length === 0) return;

    setMostrarModal(true);
    vaciarCarrito();
  };

  return (
    <section className="carrito-section">

      <div className="container">

        <div className="carrito-titulo">
          <h2>Mi carrito</h2>
          <p>Revisa tus productos antes de continuar.</p>
        </div>

        {carrito.length === 0 ? (

          <div className="carrito-vacio">

            <i className="bi bi-cart-x"></i>

            <h3>Tu carrito está vacío</h3>

            <p>
              Descubre nuestros productos sustentables y
              comienza a formar parte del cambio.
            </p>

            <a href="/#productos" className="btn btn-comprar">
              Explorar productos
            </a>

          </div>

        ) : (

          <div className="row g-4">

            <div className="col-lg-8">

              {carrito.map((producto) => (

                <div className="carrito-producto" key={producto.id}>

                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                  />

                  <div className="carrito-info">

                    <h5>{producto.nombre}</h5>

                    <p>
                      ${Number(producto.precio).toFixed(2)} MXN
                    </p>

                    <div className="cantidad-control">

                      <button
                        type="button"
                        onClick={() => disminuirCantidad(producto.id)}
                        aria-label="Disminuir cantidad"
                      >
                        -
                      </button>

                      <span>{producto.cantidad}</span>

                      <button
                        type="button"
                        onClick={() => aumentarCantidad(producto.id)}
                        aria-label="Aumentar cantidad"
                      >
                        +
                      </button>

                    </div>

                  </div>

                  <button
                    type="button"
                    className="eliminar-producto"
                    onClick={() => eliminarProducto(producto.id)}
                    aria-label={`Eliminar ${producto.nombre}`}
                  >
                    <i className="bi bi-trash"></i>
                  </button>

                </div>

              ))}

            </div>

            <div className="col-lg-4">

              <div className="carrito-resumen">

                <h4>Resumen de compra</h4>

                <div className="resumen-linea">
                  <span>Subtotal</span>
                  <span>${Number(totalPrecio).toFixed(2)} MXN</span>
                </div>

                <div className="resumen-linea">
                  <span>Envío</span>
                  <span>Por definir</span>
                </div>

                <hr />

                <div className="resumen-total">
                  <span>Total</span>
                  <strong>
                    ${Number(totalPrecio).toFixed(2)} MXN
                  </strong>
                </div>

                <button
                  type="button"
                  className="btn btn-comprar w-100 mt-4"
                  onClick={comprar}
                >
                  <i className="bi bi-check-circle me-2"></i>
                  Comprar
                </button>

                <p className="carrito-nota">
                  <i className="bi bi-leaf"></i>
                  Cada elección sustentable cuenta.
                </p>

              </div>

            </div>

          </div>

        )}

      </div>

      {/* MODAL DE AGRADECIMIENTO */}

      {mostrarModal && (

        <div
          className="agradecimiento-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setMostrarModal(false);
            }
          }}
        >

          <div
            className="agradecimiento-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="agradecimiento-titulo"
          >

            <div className="agradecimiento-header">

              <button
                type="button"
                className="modal-cerrar"
                onClick={() => setMostrarModal(false)}
                aria-label="Cerrar"
              >
                &times;
              </button>

              <div className="agradecimiento-icono">
                <i className="bi bi-check-lg"></i>
              </div>

              <h2 id="agradecimiento-titulo">
                ¡Felicidades!
              </h2>

              <p>
                Tu elección hace la diferencia.
              </p>

            </div>

            <div className="agradecimiento-body">

              <h4>
                ¡Gracias por elegir BIOVIDA!
              </h4>

              <p>
                Nos alegra que formes parte de este movimiento
                por un futuro más sustentable.
              </p>

              <p>
                Al elegir nuestros productos, apoyas el
                aprovechamiento de residuos cítricos y
                contribuyes a reducir el desperdicio,
                dando una nueva oportunidad a los recursos
                que nos brinda la naturaleza.
              </p>

              <div className="frase-sustentable">

                <i className="bi bi-flower1"></i>

                <p>
                  "Pequeñas acciones generan grandes cambios.
                  Juntos transformamos residuos en oportunidades
                  para un planeta mejor."
                </p>

              </div>

              <p className="mensaje-final">
                ¡Gracias por ser parte del cambio!
              </p>

            </div>

            <div className="agradecimiento-footer">

              <button
                type="button"
                className="btn btn-comprar"
                onClick={() => setMostrarModal(false)}
              >
                Continuar explorando
              </button>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default Carrito;
