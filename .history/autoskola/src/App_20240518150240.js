import React from 'react';
import 'antd/dist/reset.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './stranice/Login';
import Registracija from './stranice/Registracija';
import { Toaster } from 'react-hot-toast';
import Home from './stranice/Home';
import { useSelector } from 'react-redux';
import ProtectedRoute from './komponente/ProtectedRoute';
import ApplyInstruktor from './stranice/ApplyInstruktor';
import Notifications from './stranice/Notifications';
import Userslist from './stranice/Admin/Userslist';
import Instruktorlist from './stranice/Admin/Instruktorlist';
import Profile from './stranice/Instruktor/Profile'; 

function App() {
  const { loading } = useSelector(state => state.alerts);
  return (
    <BrowserRouter>
      {loading && <div className='spinner-parent'>
        <div className="spinner-border" role="status"></div>
      </div>}
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/registracija' element={<Registracija />} />
        <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/prijava-instruktor' element={<ProtectedRoute><ApplyInstruktor /></ProtectedRoute>} />
        <Route path='/notifications' element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
        <Route path='/admin/userslist' element={<ProtectedRoute><Userslist /></ProtectedRoute>} />
        <Route path='/admin/instruktorlist' element={<ProtectedRoute><Instruktorlist /></ProtectedRoute>} />
        <Route path='/instruktor/profile/:instruktorId' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
