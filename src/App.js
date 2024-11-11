import React from 'react';
import "./App.css";
import logo from "../public/SM.png"

const Main = () => (
  <main className="App-main">
    <a className="email" href="mailto:me@sammurray.me">
    <img src={logo}/>
    </a>
  </main>
);

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;