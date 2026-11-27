
import { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export function CarritoProvider({ children }) {

  const [carrito, setCarrito] = useState([]);

  // AGREGAR PRODUCTO
  const agregarAlCarrito = (producto) => {

    setCarrito((actual) => {

      const existe = actual.find(
        (item) => item.id === producto.id
      );

      if (existe) {
        return actual.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: (item.cantidad || 1) + 1 }
            : item
        );
      }

      return [
        ...actual,
        { ...producto, cantidad: 1 }
      ];

    });
  };

  // AUMENTAR CANTIDAD
  const aumentarCantidad = (id) => {

    setCarrito((actual) =>
      actual.map((producto) =>
        producto.id === id
          ? {
              ...producto,
              cantidad: (producto.cantidad || 1) + 1
            }
          : producto
      )
    );

  };

  // DISMINUIR CANTIDAD
  const disminuirCantidad = (id) => {

    setCarrito((actual) =>
      actual.map((producto) =>
        producto.id === id
          ? {
              ...producto,
              cantidad: Math.max(1, (producto.cantidad || 1) - 1)
            }
          : producto
      )
    );

  };

  // ELIMINAR PRODUCTO
  const eliminarProducto = (id) => {

    setCarrito((actual) =>
      actual.filter((producto) => producto.id !== id)
    );

  };

  // VACIAR CARRITO
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // CALCULAR TOTAL
  const totalPrecio = carrito.reduce(
    (total, producto) =>
      total + Number(producto.precio) * Number(producto.cantidad || 1),
    0
  );

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        aumentarCantidad,
        disminuirCantidad,
        eliminarProducto,
        vaciarCarrito,
        totalPrecio
      }}
    >
      {children}
    </CarritoContext.Provider>
  );

}

// UTILIZAR CARRITO
export function useCarrito() {
  const context = useContext(CarritoContext);

  if (!context) {
    throw new Error(
      "useCarrito debe utilizarse dentro de CarritoProvider"
    );
  }

  return context;
}
