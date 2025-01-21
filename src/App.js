import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     <Header/>
     <main>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </Router>
    </main>
    </div>
  );
}

export default App;
