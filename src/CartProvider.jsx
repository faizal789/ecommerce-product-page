import React from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [count, setCount] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [removeProduct, setRemoveProduct] = React.useState(false);
  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
        totalPrice,
        setTotalPrice,
        removeProduct,
        setRemoveProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
