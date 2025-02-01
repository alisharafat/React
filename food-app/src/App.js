// import './App.css';
// import * as React from 'react';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Menu from './components/Menu'
// import Contact from './components/Contact';
// import Cart from './components/Cart'

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// function App() {
  
//   return (

//     <Router>
//        <div className="App">
//       <Navbar  /> 
//       <Routes>
//         <Route path='/' element={<Home />}/> 
//         <Route path='/menu' element={<Menu />}/> 
//         <Route path='/cart' element={<Cart name = "chhole"/>}/> 
//         <Route path='/contact' element={<Contact />}/> 

//       </Routes>
//     </div>
//     </Router>
   
//   );
// }

// export default App;



import './App.css';
import * as React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

