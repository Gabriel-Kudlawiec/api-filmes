import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './global.css';
import Home from './pages/home';
import Detalhes from './pages/detalhes'


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/detalhes/:id' element={<Detalhes/>}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);



