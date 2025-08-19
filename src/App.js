import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="App">
      <div className="circle-container">
        <a className="circle" href="/about">ABOUT</a>
        <a className="circle" href="mailto:me@sammurray.me">CONTACT</a>
        <a className="circle" href="/WIP">WIP</a>
      </div>
    </div>
  );
}

function ComingSoon({ pageName }) {
  return (
    <div className="App">
      <h1 className="coming-soon">{pageName} - Coming Soon!</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<ComingSoon pageName="About" />} />
        <Route path="/WIP" element={<ComingSoon pageName="WIP" />} />
      </Routes>
    </Router>
  );
}

export default App;
