import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react';  
import Home from './pages/home';
import Food from './pages/food';
import Drink from './pages/drink';
import About from './pages/about';

const App = () => {
  return ( 
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/food' element={<Food/>} /> 
        <Route path='/drink' element={<Drink/>} /> 
        <Route path='/about' element={<About/>} /> 
      </Routes>
    </Router>
  );
}

export default App;

