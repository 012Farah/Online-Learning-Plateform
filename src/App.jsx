import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import ForgotPassword from './forgot-password'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
