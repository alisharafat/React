

import React from 'react'

function NewsBox(props) {
  return (
    
        <div  className="newsBox" style={{padding:"10px"}}>
       <div > <img src={props.imageUrl} style={{width:"340px",height:"200px",padding:"5px"}} alt="" /></div>
       <h3 >{props.title}</h3>
        <p>{props.description}</p> 
        <button style={{backgroundColor:"grey",outline:"none",border:"none"}}> <a href={props.url} style={{color:"black",outline:"none",textDecoration:"none"}}>Read More</a></button>             
</div>
  )
}

export default NewsBox