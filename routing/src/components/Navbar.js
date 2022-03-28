import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="nav">
        <ul id="lists">
          <li><Link  to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/business">Business</Link></li>
        </ul>
    </div>
  )
}

export default Navbar