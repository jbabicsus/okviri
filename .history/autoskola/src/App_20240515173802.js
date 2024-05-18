import React from 'react';
import 'antd/dist/reset.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Login from './stranice/Login'
import Registracija from './stranice/Registracija'
import {Button} from 'antd'
import { Toaster } from 'react-hot-toast';
import Home from './stranice/Home';
import { useSelector } from 'react-redux';
import ProtectedRoute from './komponente/ProtectedRoute';
import ApplyInstruktor from './stranice/ApplyInstruktor';
function App() {
  const {loading} = useSelector(state => state.alerts);
  return (
    <BrowserRouter>
      {loading && <div className='spinner-parent'>
        <div class="spinner-border" role="status">
            
        </div>
      </div>}
      <Toaster 
      position="top-center"
      reverseOrder={false}
      />
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/registracija' element={<Registracija />}/>
        <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>}/>

        <Route path='/apply-instruktor' element={<Login />}/>
        <Route path='/registracija' element={<Registracija />}/>
        <Route path='/' element={<ProtectedRoute><ApplyInstruktor /></ProtectedRoute>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
