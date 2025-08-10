import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [points, setPoints] = useState(() => {
    const storedPoints = localStorage.getItem("points");
    return storedPoints ? JSON.parse(storedPoints) : 0;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("points", JSON.stringify(points));
  }, [cart, points]);

  const addToCart = (platillo) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.nombre === platillo.nombre);
      if (existing) {
        return prev.map((item) =>
          item.nombre === platillo.nombre
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prev, { ...platillo, cantidad: 1 }];
    });
  };

  const removeFromCart = (nombre) => {
    setCart((prev) => prev.filter((item) => item.nombre !== nombre));
  };

  const increaseQuantity = (nombre) => {
    setCart((prev) =>
      prev.map((item) =>
        item.nombre === nombre ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const decreaseQuantity = (nombre) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.nombre === nombre
            ? { ...item, cantidad: Math.max(1, item.cantidad - 1) }
            : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  const totalItems = cart.length;
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0
  );

  // Puntos: 1 por cada $90 gastados
  const calculatePoints = () => Math.floor(totalPrice / 90);

  const redeemPoints = () => {
    const earnedPoints = calculatePoints();
    setPoints((prev) => prev + earnedPoints);
    setCart([]);
    return earnedPoints;
  };

  const applyDiscount = (percent) => {
    return totalPrice - totalPrice * (percent / 100);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalItems,
        totalPrice,
        points,
        setPoints,
        redeemPoints,
        applyDiscount,
        calculatePoints,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
