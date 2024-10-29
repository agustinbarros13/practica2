import React from 'react';
import useCurrentTime from './customHooks/useCurrentTime';
import Timer from './components/Timer/Timer';
import Calculator from './components/Calculator/Calculator';
import './App.css';

function App() {
  const currentTime = useCurrentTime();

  return (
    <div className="app">
      <h1>React Practice App</h1>
      <Timer time={currentTime} />
      <Calculator />
    </div>
  );
}

export default App;
