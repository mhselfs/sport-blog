import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NotFound from './pages/NotFound';



const App = () => {
  return (
    <div className='font-display'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} /> 
      </Routes>
    </div>
  );
}

export default App;
