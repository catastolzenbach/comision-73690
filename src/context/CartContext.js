import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setItems] = useState([]);

  // Agregar al carrito
  const addToCart = (product) => {
    setItems((prevItems) => {
      const itemExists = prevItems.find(item => item.id === product.id);
      if (itemExists) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Quitar un producto del carrito
  const removeFromCart = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Vaciar todo el carrito
  const clearCart = () => {
    setItems([]);
  };

  // Total de unidades en el carrito
  const cartTotalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Total en dinero
  const cartTotalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        cartTotalQuantity,
        cartTotalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
