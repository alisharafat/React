import './NewsBox.css'
import React from 'react'

function NewsBox(props) {
  return (
    
        <div  className="newsBox" >
       <div className="box" >  <img className='boximg' src={props.imageUrl}  alt="" /></div>
       <h3 >{props.title.slice(0,65)}</h3>
        <p>{props.description.slice(0,150)}...
        <button style={{backgroundColor:"transparent",outline:"none",border:"none",textDecoration:"underline"}}> <a href={props.url} style={{color:"black",outline:"none",textDecoration:"none"}}>Read More</a></button>             
            
        </p> 
</div>
  )
}

export default NewsBox