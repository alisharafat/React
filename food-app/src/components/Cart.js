// import React from 'react'

// function Cart(props) {
//   return (
//     <div>Cart
//           <span>{props.name}</span>
        
//     </div>
//   )
// }

// export default Cart

import React from 'react';
import './Cart.css';
import { useCart } from './CartContext';

function Cart() {
  const { cart } = useCart();

  // Calculate the total price of items in the cart
  const totalPrice = cart.reduce((sum, item) => sum + item.rate * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
                    item.image
                  }
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Amount: ₹{item.rate *item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Cart Summary</h3>
            <p>
              <strong>Total Price: ₹{totalPrice}</strong>
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
