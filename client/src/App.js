import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import LoadingCard from './components/LoadingCard/LoadingCard';
import SuccessCard from './components/SuccessCard/SuccessCard';
import UploadCard from './components/UploadCard/UploadCard';
import CardPage from './components/CardPage/CardPage';

function App() {

  
  return (
    <BrowserRouter >
    <div className="App">
      <Routes>
        <Route element={<UploadCard/>} exact path='/'/>
        <Route element={<LoadingCard/>} path='/loading'/>
        <Route element={<SuccessCard/>} path='/result'/>
      </Routes>
      <p className='footer'>created by <b>Bryn Frayne</b> - devChallenges.io</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
