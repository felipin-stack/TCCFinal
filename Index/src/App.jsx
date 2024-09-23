import React from 'react';
import './App.css';
import Home from './pages/Home';
import Clientes from './pages/Clientes';
import Sobre from './pages/Sobre';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes, Link, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className='div1'>
        <div className='line'></div>
        <ul>
          <div className='div2'>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/clientes">Clientes</Link></li>
          <li><Link to ="/sobre">Sobre</Link></li>
          </div>
        </ul>
    </div>
    <Routes>
      <Route path='/' element ={<Home/>}></Route>
      <Route path='/clientes' element ={<Clientes/>}></Route>
      <Route path='/sobre' element ={<Sobre/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
