import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
            <h1>Sam Murray</h1>
            <p>
              I am an Appalachian-based designer and student focused on using honest materials to create works that are function-led. I also aim to create work that is playful and can spark joy in those who interact with it. I am equally inspired by ancient woodworking techniques as well as more modern design, such as the Bauhaus movement and Achille Castiglioni. At the core of my approach is curiosity - I believe this is one of the greatest virtues I possess and hope to continue to hone and focus that curiosity as I continue my education.
            </p>
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
