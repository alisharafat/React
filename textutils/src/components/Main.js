import React, {useState} from 'react';


export default function Main(props) {
   
    
    const upClickFun = ()=>{      
        setText(text.toUpperCase());
        props.showAlert("text converted to uppercase");
    }

    const loClickFun=()=>{
          setText(text.toLowerCase());
          props.showAlert("text converted to lowercase");
    }
    const clearFun =()=>{
        setText("");
        props.showAlert("text cleared");

    }

    const copyFun =()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("text copy to clipboard");

    }

   const onChangeFun = (event)=>{
          setText(event.target.value);

          
   }
   const removeSpaceFun=()=>{
       let temp=text.split(/[ ]+/);
       setText(temp.join(" "));
       props.showAlert("extra spaces removed");

   }

   
    const[text,setText]=useState("Enter text here");

  return (
    <div className='container'>
    <h2 style={props.mode=="dark"?{color:"white"}:{}} >TextUtils-Word Counter</h2>
      <textarea placeholder="gg"className='textarea' style={props.mode=="dark"?{color:"white",backgroundColor:"rgb(5, 69, 99)"}:{}} value={text} onChange={onChangeFun} name="" id="textarea" cols="30" rows="10"></textarea>
      <div className='btnContainer'>
        <button className='funBtn'  onClick={text.length!=0 &&upClickFun}>Convert to UpperCase</button>
        <button className='funBtn' onClick={text.length!=0 && loClickFun}>Convert to Lowercase</button>
        <button className='funBtn' onClick={text.length!=0 && clearFun}>Clear Text</button>
        <button className='funBtn' onClick={text.length!=0 && copyFun}>Copy Text</button>
        <button className='funBtn' onClick={text.length!=0 && removeSpaceFun}>Remove Extra Spaces</button>
      </div>
      <div style={props.mode=="dark"?{color:"white"}:{}}>
      <h1>Your Text Summary</h1>
      <h3 >{text.split(" ").filter((elm)=>{return elm!=""}).length} words and {text.length} characters </h3>
      <h3>{text.split(" ").length*.008} minutes to read</h3>
      </div>


    </div>
  )
}
