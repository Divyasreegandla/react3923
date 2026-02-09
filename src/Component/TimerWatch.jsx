import React, { useState, useEffect } from "react";

export default function TimerWatch() {
  const [sec, setSec] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        setSec((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [running]);

  const handleStart = () => {
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
  };
  const handlereset = () => {
    setSec(0);
    setRunning(false);
  };
  return (
    <div>
      <h1>Stop watch timer</h1>
      <h2>Timer:{sec}</h2>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handlereset}>reset</button>
    </div>
  );
}