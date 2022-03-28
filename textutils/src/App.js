import logo from './logo.svg';
import './App.css';
import Navbar  from './components/Navbar';
import Main from './components/Main';
import Alert from './components/Alert';
import About  from './components/About';
import React,{useState} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  const [view, setview] = useState("light");

  const [alert, setalert] = useState(null)
  

  const showAlert=(message)=>{
         setalert(message);

         setTimeout(() => {
           setalert(null);
         }, 2000);
  }
  

  const modeFun=()=>{

    if(view==="light"){
      setview("dark");
    console.log(view);
    showAlert("dark mode on");


    }
    else{
      setview("light");
    console.log(view);
     showAlert("dark mode off")

    }
  }


  
  return (
   <Router>
      <div className="App">
    <button className='modeBtn' onClick={modeFun} style={view==="light"?{backgroundColor:"white"}:{backgroundColor:"black",color:"white"}}>{view} Mode</button>

      <Navbar title='Textutils2' mode={view} about='aboutUs'></Navbar>
      {alert!=null ?<Alert alert={alert}></Alert>:"" }  

      <Switch>
        <Route exact path='/'>
      <Main title="mainTitle" showAlert={showAlert} mode={view}></Main>            
        </Route>
        <route exact path="/about">
      <About mode={view} ></About>
        </route>
      </Switch>
    </div>
   </Router>
  );
}

export default App;
