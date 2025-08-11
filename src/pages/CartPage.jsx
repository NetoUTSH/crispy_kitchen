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
      <div className="cont ">
        <h2 className="mb-5">
          <i class="bi bi-cart-dash"></i> Tu carrito{" "}
        </h2>
        {cart.length === 0 ? (
          <p>No hay platillos en el carrito.</p>
        ) : (
          <>
            <ul className="list-group">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div className="m-2">
                    <img
                      src={item.imagen}
                      height="60px"
                      width="80px"
                      className="imgPlatillo"
                    />
                    {item.nombre} ● ${item.precio}
                  </div>
                  <div>
                    <button
                      className="btn btnControl btn-sm me-2"
                      onClick={() => decreaseQuantity(item.nombre)}
                    >
                      
                    </button>
                    {item.cantidad}
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
                      <i class="bi bi-trash3-fill"></i>
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <h4 className="mt-3">Subtotal: ${totalPrice}</h4>
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

            <button className="btn btnDiscount" onClick={handleRedeemDiscount}>
              Canjear 30 puntos por 10% descuento
            </button>
            <button className="btn btnFinish" onClick={handleCheckout}>
              Finalizar compra
            </button>
          </>
        )}
      </div>
    </>
  );
};
