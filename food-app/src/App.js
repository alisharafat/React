import './App.css';
import * as React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (

    <Router>
       <div className="App">
      <Navbar  /> 
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/menu' element={<Menu />}/> 
        <Route path='/about' element={<About />}/> 
        <Route path='/contact' element={<Contact />}/> 

      </Routes>
    </div>
    </Router>
   
  );
}

export default App;
