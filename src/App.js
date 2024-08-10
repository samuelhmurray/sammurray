import React from 'react';
import "./App.css";

const Header = () => (
  <header className="App-header">
    <h1>Sam Murray</h1>
  </header>
);

const Main = () => (
  <main className="App-main">
    <a className="email" href="mailto:me@sammurray.me">
      me@sammurray.me
    </a>
  </main>
);

const Footer = () => (
  <footer className="App-footer">
    <a 
      href="https://www.linkedin.com/in/samuel-h-murray/" 
      className="linkedin" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="LinkedIn Profile"
    >
      <i className="fab fa-linkedin"></i>
    </a>
    <a 
      href="https://github.com/samuelhmurray" 
      className="github" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="GitHub Profile"
    >
      <i className="fab fa-github"></i>
    </a>
  </footer>
);

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;