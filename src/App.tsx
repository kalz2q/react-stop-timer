import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [stoppedTime, setStoppedTime] = useState(0);
  const [time, setTime] = useState(0);
  // const [lastStartedAt, setLastStartedAt] = useState(null);
  const [lastStartedAt, setLastStartedAt] = useState(0);

  const calcTime = () => {
    // return lastStartedAt === null
    return lastStartedAt === 0
      ? stoppedTime
      : stoppedTime + new Date().getTime() - lastStartedAt;
  };

  const onClick = () => {
    // if (lastStartedAt === null) {
    if (lastStartedAt === 0) {
      setLastStartedAt(new Date().getTime());
      return;
    }
    setStoppedTime(calcTime());
    // setLastStartedAt(null);
    setLastStartedAt(0);
    return;
  };

  // useEffect(() => {
  //   const requestId = requestAnimationFrame(() => setTime(calcTime()));
  //   return () => cancelAnimationFrame(requestId);
  // });

  requestAnimationFrame(() => setTime(calcTime()));
  // setInterval(() => setTime(calcTime()));

  return (
    <div className="App">
      <p>timer (sec): {Math.floor(time / 1000)}</p>
      <p>timer (ms): {time}</p>
      <p>
        <button onClick={onClick}>
          {/* {lastStartedAt === null ? "start" : "stop"} */}
          {lastStartedAt === 0 ? "start" : "stop"}
        </button>
      </p>
    </div>
  );
}

export default App;
