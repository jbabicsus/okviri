import React from 'react';
import 'antd/dist/reset.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Login from './stranice/Login'
import Registracija from './stranice/Registracija'
import {Button} from 'antd'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={Login}/>
        <Route path='/registracija' element={Registracija}/>



      </Routes>
    </BrowserRouter>
  );
}

export default App;
