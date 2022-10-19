import React from "react";
import "./App.css";
// react-stop-timer を counter にする
// isRunning で制御する

const { useState, useEffect } = React;
const delay = 1000;

function App() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning) { setCounter(prevCount => prevCount + 1); }
    }, delay);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="App">
      <div>{counter}</div>
      <button onClick={() => setIsRunning(true)}>START</button>
      <button onClick={() => { setIsRunning(false); console.log(counter) }}>STOP</button>
    </div >
  );
}

export default App;
