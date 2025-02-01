import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      // Check if the item already exists in the cart
    //   const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
    //   if (existingItem) {
    //     // Update the quantity of the existing item
    //     return prevCart.map((cartItem) =>
    //       cartItem.id === item.id
    //         ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
    //         : cartItem
    //     );
    //   }
      // Add the new item to the cart
      return [...prevCart, { ...item }];
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
