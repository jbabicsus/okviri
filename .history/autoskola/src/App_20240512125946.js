import React from 'react';
import 'antd/dist/reset.css';
import {Browser, Routes, Route, BrowserRouter} from 'react-router-dom'
import Login from './stranice/Login'
import Registracija from './stranice/Registracija'
import {Button} from 'antd'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={Login}/>



      </Routes>
    </BrowserRouter>
  );
}

export default App;