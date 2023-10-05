import React from 'react';
import logo from './logo.svg';
import './App.css';
import Musicbar from './components/Musicbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
