import React, {useState} from 'react'
import './Navbar.css';
import Logo from "../images/logo.png";
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
     const [links, setlinks] = useState(false);
     const toggleNavbar=()=>{
       setlinks(!links);
     }

  

  return (
    <div className="class1">
       <div className="logo">
        <img src={Logo} alt="" />
      </div>
     

      <div className="mobile">
         <img src={Logo} alt="" className={links ?"hideLogo":"showLogo"} /> 
        <div className={links ?"mobileLinks":"closeLinks"}>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div> 
        <button  onClick={toggleNavbar}>  <ReorderIcon fontSize='large' /> </button>
      </div>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar