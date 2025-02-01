// import React, { useState } from 'react'
// import './Card.css'
// import { Button } from '@mui/material';

// function Card(props) {

//   const [quantity,setQuantity]=useState(0);
//   function addToCart() {
//   }
//   return (
//     <div className='card' >
//       {/* <button>a</button> */}
//        <img  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + props.image} alt="" />
//        <h2>{props.name} nn</h2>
//        <h3>{props.price}</h3>
//        <div>
//         <span>{quantity}</span>
//         <Button onClick={()=>setQuantity(quantity+1)}>+</Button>
//         <Button onClick={()=>setQuantity(quantity-1)}>-</Button>
//         <div> <Button onClick={addToCart}>Add to Cart</Button> </div>
        
//        </div>
//     </div>
//   )
// }

// export default Card


import React, { useState } from 'react';
import './Card.css';
import { Button } from '@mui/material';
import { useCart } from './CartContext';

function Card(props) {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useCart();
  console.log(props);

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({
        id: props.id,
        name: props.name,
        price: props.price,
        quantity: quantity,
        image: props.image,
        rate:props.rate // Include the image
      });
      // Maintain the current quantity, so it doesn't reset to 0
    }
  };

  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
          props.image
        }
        alt={props.name}
      />
      <h2>{props.name}</h2>
      <h3>₹{props.price}</h3>
      <div>
        <span>{quantity}</span>
        <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
        <Button onClick={() => quantity > 0 && setQuantity(quantity - 1)}>-</Button>
        <div>
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}

export default Card;

