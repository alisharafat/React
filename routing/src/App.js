import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Home from './components/Home';
import Business from './components/Business';
import News from './components/News';
// import  {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {
  BrowserRouter as Router,
  
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (

    <Router> 
      <div className="App">
      <Navbar></Navbar>    
      {/* <Home></Home> */}
      <Routes>  
      <Route   path='/' element={<Home/>}/>   
      <Route  path='/shop' element={<Shop/>}/> 
      <Route exact  path='/business' element={<Business/>}/> 
      <Route path='/news' element={<News/>} /> 
      </Routes>
      </div>
    </Router>
  );
}

export default App;
