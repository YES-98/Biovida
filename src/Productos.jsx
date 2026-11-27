
import "./Productos.css";

import producto1 from "./assets/WhatsApp Image 2026-11-24 at 00.25.37.jpeg";
import producto2 from "./assets/hero.png";
import producto3 from "./assets/hero.png";

import { useCarrito } from "./CarritoContext";

function Productos() {

  const { agregarAlCarrito } = useCarrito();

  const productos = [
    {
      id: 1,
      nombre: "EcoPeel Decorativo",
      descripcion: "Pieza artesanal biodegradable elaborada a partir de residuos cítricos.",
      precio: 80,
      imagen: producto1
    },
    
  ];

  return (
    <section className="productos-section" id="productos">

      <div className="container">

        <div className="productos-titulo">
          <h2>Nuestros Productos</h2>

          <p>
            Elaborados a partir de residuos cítricos para crear
            artículos sustentables y funcionales.
          </p>
        </div>

        <div className="row g-4">

          {productos.map((producto) => (

            <div className="col-md-4" key={producto.id}>

              <div className="card producto-card">

                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="producto-img card-img-top"
                />

                <div className="card-body">

                  <h5 className="card-title">
                    {producto.nombre}
                  </h5>

                  <p className="card-text">
                    {producto.descripcion}
                  </p>

                  <p className="producto-precio">
                    ${producto.precio} MXN
                  </p>

                  
<button
  type="button"
  className="btn btn-comprar"
  onClick={() => agregarAlCarrito(producto)}
>
  <i className="bi bi-cart-plus me-2"></i>
  Agregar al carrito
</button>


                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Productos;
