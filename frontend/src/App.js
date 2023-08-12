import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'; 

import Home from './pages/Home';
import Books from './pages/Books';
import Login from './pages/login';
import Signup from './pages/signup';
import Dashboard from './pages/UserAccount'

function App() {
  const navigateToHomePage = () => {
    // Your navigation logic here, it can be as simple as changing the window location
    window.location.href = '/'; // Replace '/home' with the actual path to your home page
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup onSuccess={navigateToHomePage} />}/>
          <Route path='/books' element={<Books/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
