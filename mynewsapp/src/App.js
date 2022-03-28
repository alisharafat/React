import News from './components/News';
import NavBar from './components/NavBar';
import './App.css';
import React ,{useState} from 'react';
import {
  BrowserRouter as Router,
  
  Routes,
  Route
} from "react-router-dom";

function App() {
  const apikey="8a2a28938a1d42028d8801519f2c135e";
  return (
    <Router>
    <div className='App'>
    <NavBar> </NavBar>
    <Routes>
      <Route path='/' element={<News apiKey={apikey} country="in" category="general" />} /> 
      <Route path='/business' element={<News apiKey={apikey} country="in" category="business" />} /> 
      <Route path='/entertainment' element={<News apiKey={apikey} country="in" category="entertainment" />} /> 
      <Route path='/health' element={<News apiKey={apikey} country="in" category="health" />} /> 
      <Route path='/science' element={<News apiKey={apikey} country="in" category="science" />} />
      <Route path='/technology' element={<News apiKey={apikey} country="in" category="technology" />} /> 

      
    </Routes>
    {/* <News apiKey={apikey} country="in" category="general" ></News> */}
  </div>
  </Router> 
    
  )
}

export default App
