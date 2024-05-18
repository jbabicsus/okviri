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
      <div className='loader-parent'>
      <div class="spinner-grow text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
  <span class="sr-only">Loading...</span>
</div>
      </div>
      <Toaster 
      position="top-center"
      reverseOrder={false}
      />
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/registracija' element={<Registracija />}/>
        <Route path='/' element={<Home />}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
