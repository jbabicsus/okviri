import React from 'react';
import 'antd/dist/reset.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Login from './stranice/Login'
import Registracija from './stranice/Registracija'
import {Button} from 'antd'
import { Toaster } from 'react-hot-toast';
import Home from './stranice/Home';
function App() {
  return (
    <BrowserRouter>
      <Toaster 
      position="top-center"
      reverseOrder={false}
      />
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/registracija' element={<Registracija />}/>
        <Route path='/home' element={<Home />}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
