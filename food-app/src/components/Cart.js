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
import { Button } from '@mui/material';

function Cart() {
  const { cart } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const placeOrder = ()=>{
    console.log("order")
    alert("Your order has been placed!")
  }


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
                    item.image
                  }
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Amount: ₹{(item.price*item.quantity)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Cart Summary</h3>
            <p>
              <strong>Total Price: ₹{totalPrice}</strong>
              <div>
            <Button onClick={placeOrder}>Place Your Order</Button>
          </div>
            </p>
          </div>
         
        </>
      )}
    </div>
  );
}

export default Cart;
