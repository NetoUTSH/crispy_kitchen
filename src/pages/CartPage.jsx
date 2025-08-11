// src/pages/CartPage.jsx
import { Navbar } from "../core/components/navbar/Navbar";
import { useCart } from "../context/CartContext";
import Swal from "sweetalert2";
import { useState } from "react";
import "./CartPage.css";
export const CartPage = () => {
  const {
    cart,
    totalPrice,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    points,
    setPoints,
    redeemPoints,
    applyDiscount,
    calculatePoints,
  } = useCart();

  const [discount, setDiscount] = useState(0);

  const handleRedeemDiscount = () => {
    if (points >= 30) {
      setPoints(points - 30);
      setDiscount(10);
    } else {
      Swal.fire({
        title: "Necesitas al menos 30 puntos para un 10% de descuento",
        icon: "info",
        confirmButtonText: "Aceptar",
      });
    }
  };

  const handleCheckout = () => {
    const earned = redeemPoints();
    Swal.fire({
      title: "¡Compra realizada!",
      text: `. ¡Ganaste ${earned} puntos!`,
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="cont mx-auto p-4 p-md-5">
          <h2 className="mb-4 text-center">
            <i className="bi bi-cart-dash"></i> Tu carrito
          </h2>

          {cart.length === 0 ? (
            <p className="text-center">No hay platillos en el carrito.</p>
          ) : (
            <>
              <ul className="list-group mb-4">
                {cart.map((item, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex flex-column flex-sm-row justify-content-between align-items-center"
                  >
                    <div className="d-flex align-items-center mb-2 mb-sm-0">
                      <img
                        src={item.imagen}
                        className="imgPlatillo img-fluid"
                        style={{ maxHeight: "60px", maxWidth: "80px" }}
                      />
                      <span className="ms-2">
                        {item.nombre} ● ${item.precio}
                      </span>
                    </div>

                    <div className="d-flex align-items-center">
                      <button
                        className="btn btnControl btn-sm me-2"
                        onClick={() => decreaseQuantity(item.nombre)}
                      >
                        -
                      </button>
                      <span>{item.cantidad}</span>
                      <button
                        className="btn btnControl btn-sm ms-2"
                        onClick={() => increaseQuantity(item.nombre)}
                      >
                        +
                      </button>
                      <button
                        className="btn btn-sm eliminar ms-3"
                        onClick={() => removeFromCart(item.nombre)}
                      >
                        <i className="bi bi-trash3-fill"></i>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="text-center text-sm-start">
                <h4>Subtotal: ${totalPrice}</h4>
                <hr />
                {discount > 0 && <h5>Descuento aplicado: -{discount}%</h5>}
                <h4>
                  Total: ${discount > 0 ? applyDiscount(discount) : totalPrice}
                </h4>
                <hr />
                <p>
                  <strong>Puntos actuales:</strong> {points}
                </p>
                <p>
                  Si compras ahora ganarás: <strong>{calculatePoints()}</strong>{" "}
                  puntos
                </p>
              </div>

              <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-start mt-3">
                <button
                  className="btn btnDiscount mb-2 mb-sm-0 me-sm-2"
                  onClick={handleRedeemDiscount}
                >
                  Canjear 30 puntos por 10% descuento
                </button>
                <button className="btn btnFinish" onClick={handleCheckout}>
                  Finalizar compra
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
