import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages';
import SigninPage from './pages/signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/signin' element={<SigninPage />} />
        <Route exact path='/' element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
