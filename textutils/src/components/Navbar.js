import React,{useState} from 'react'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
 
    if(props.mode==="dark"){
        document.body.style.backgroundColor="grey";
        // setnavStyle({
        //   color:"white",
        // textDecoration:"none"

        // })
        
   }
   else{
       document.body.style.backgroundColor="white"
      //  setnavStyle({
      //   color:"black",
      //   textDecoration:"none"
      //  })


   }
  

   
           
  return (
    
    <nav className='navbar' style={props.mode=="dark"? {backgroundColor:"rgb(5, 69, 99)",color:"white"}:{}}>
    <span className='textutil'> <Link rel="stylesheet" style={props.mode=="dark"? {color:"white",textDecoration:"none"}:{color:"black", textDecoration:"none"}} to="/" >TextUtils</Link> </span>
    <span className='home'>   <Link rel="stylesheet" style={props.mode=="dark"? {color:"white",textDecoration:"none"}:{color:"black",textDecoration:"none"}} to="/" >Home</Link> </span>
    <span className='about'  > <Link rel="stylesheet" style={props.mode=="dark"? {color:"white",textDecoration:"none"}:{color:"black",textDecoration:"none"}} to="/about" >About </Link> </span>

</nav>
  )
}
