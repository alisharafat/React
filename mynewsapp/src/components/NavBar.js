import '../App.css';
import { Link } from 'react-router-dom';
import React from 'react';

function NavBar() {
  return (
    
    <div>
    <nav className="navbar">
   
     <span style={{fontSize:"2rem",padding:"5px",textAlign:"center"}} >NewsApp</span>
    <Link to="/" style={{fontSize:"1.2rem",marginTop:"10px",padding:"5px",textDecoration:"none",color:"black"}}>Home</Link>
    <Link to="/business" style={{fontSize:"1.2rem",marginTop:"10px",padding:"5px",textDecoration:"none",color:"black"}}>Business</Link>
    <Link to="/entertainment" style={{fontSize:"1.2rem",marginTop:"10px",padding:"5px",textDecoration:"none",color:"black"}}>Entertainment</Link>
    <Link to="/health" style={{fontSize:"1.2rem",marginTop:"10px",padding:"5px",textDecoration:"none",color:"black"}}>Health</Link>
    <Link to="/science" style={{fontSize:"1.2rem",marginTop:"10px",padding:"5px",textDecoration:"none",color:"black"}}>Science</Link> 
    <Link to="/technology" style={{fontSize:"1.2rem",marginTop:"10px",padding:"5px",textDecoration:"none",color:"black"}}>Technology</Link> 
    
 </nav>
</div>
  )
}

export default NavBar

