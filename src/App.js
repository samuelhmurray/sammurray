import React from 'react';
import "./App.css";

const Main = () => (
  <main className="App-main">
    <a className="email" href="mailto:me@sammurray.me">
      me@sammurray.me
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