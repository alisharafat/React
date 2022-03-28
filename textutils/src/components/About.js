import React,{useState} from 'react'

export default function About(props) {

    const about1Fun=()=>{
       if(myStyle1.display==='none'){
           setmyStyle1({
               display:'block'
           })
       }
       else{
           setmyStyle1({
               display:'none'
           });
       }

       setmyStyle2({
        display:'none'
    })
        setmyStyle3({
        display:'none'
    })
      
    }

    const about2Fun=()=>{
        if(myStyle2.display==='none'){
            setmyStyle2({
                display:'block'
            })
        }
        else{
            setmyStyle2({
                display:'none'
            });
        }
        setmyStyle1({
            display:'none'
        })
        setmyStyle3({
            display:'none'
        })
        
    }
    const about3Fun=()=>{
        if(myStyle3.display==='none'){
            setmyStyle3({
                display:'block'
            })
        }
        else{
            setmyStyle3({
                display:'none'
            });
        }
        setmyStyle2({
            display:'none'
        })
        setmyStyle1({
            display:'none'
        })
       
    }

    const [myStyle1, setmyStyle1] = useState({
        display:'none'
    });
    const [myStyle2, setmyStyle2] = useState({
        display:'none'
    });
    const [myStyle3, setmyStyle3] = useState({
        display:'none'
    });
  return (
    <div className='aboutContainer' style={props.mode=="dark"?{backgroundColor:"rgb(5, 69, 99)",color:"white"}:{}}>
            <h1 id='aboutHeading'>About Us</h1>
            <div id='about1' onClick={about1Fun} >about 1</div>
            <p id='p1' style={myStyle1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure impedit distinctio, itaque cumque earum voluptatum? Delectus modi laboriosam vero placeat. Eveniet at, facere impedit deserunt dolorem eos illo consequatur molestiae.</p>
            <div id='about2' onClick={about2Fun}>about 2</div>
            <p id="p2" style={myStyle2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit laudantium, placeat perspiciatis a neque ad accusantium vel? Sit earum dolores doloribus odit. Nisi eum commodi quod corrupti eligendi, perferendis illum!</p>
            <div id='about3' onClick={about3Fun}> about 3</div>
            <p id="p3" style={myStyle3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellendus facere vel quis minima quod nihil accusantium dolore aliquid alias, delectus suscipit architecto cum magnam, modi a non fugiat debitis.</p>
    </div>
  )
}
