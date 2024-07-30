import React from 'react';
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sam Murray</h1>
      </header>
      <main className="App-main">
        <p>Feel free to reach out to me via email:</p>
        <a className="email" href="mailto:me@sammurray.me">
          me@sammurray.me
        </a>
      </main>
      <footer className="App-footer">
        <a href="https://www.linkedin.com/in/samuel-h-murray/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/samuelhmurray" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </footer>
    </div>
  );
}

export default App;
