import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="App">
      <div className="circle-container">
        <a className="circle" href="/about">ABOUT</a>
        <a className="circle" href="mailto:me@sammurray.me">CONTACT</a>
        {/* Link directly to the PDF */}
        <a 
          className="circle" 
          href="/Portfolio%20for%20Application.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          WORK
        </a>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="App about-page">
      <div className="about-container">
        <Link to="/" className="line-left"></Link>

        <div className="about-inner">
          <img 
            src="/me.jpg"
            alt="Sam Murray"
            className="about-photo"
          />
          <div className="about-text">
            <p>
I am a designer and student who is interested in creating work that incites community, enables care, and invites those who interact into a deeper conversation or connection. I am influenced and inspired by both my upbringing in Appalachia as well as my hands-on experience working with metal, concrete, wood, and textiles.             </p>
          </div>
        </div>
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
        <Route path="/about" element={<About />} />
        <Route path="/WIP" element={<ComingSoon pageName="WIP" />} />
      </Routes>
    </Router>
  );
}

export default App;
