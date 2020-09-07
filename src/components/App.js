import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Home from './Home';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <Menu />
      <Home />
    </div>
  );
};

export default App;
