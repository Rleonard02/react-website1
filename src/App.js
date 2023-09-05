import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' exact />
      </Routes>
    </Router>
    
    </>
      
    
  );
}

export default App;
