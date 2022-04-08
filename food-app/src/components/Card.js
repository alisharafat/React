import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div className='card' >
       <img  src={props.image} alt="" />
       <h1>{props.name}</h1>
       <p>Rs-{props.price}</p>
    
    </div>
  )
}

export default Card