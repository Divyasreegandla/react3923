import React, { useState, useEffect } from "react";

export default function TimerWatchTask() {
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
const divStyle={
    textAlign:"center",
    padding:"20px",
    backgroundColor:"#74b2c5"
    
}
  const buttonStyle={
    margin:"5px",
    padding:"10px 20px",
    fontSize:"15px",
    cursor:"pointer",
    color:"#080808",
    backgroundColor:"#ebe1e1",
    border:"20px"
  }
  const timerstyle={
    fontWeight:"50px",
    color:running?"green":"red"

  }
  return (
    <div style={divStyle}>
      <h1>Stop watch timer</h1>
      <h2 style={timerstyle}>Timer:{sec}</h2>
      <button style={buttonStyle} onClick={handleStart}>start</button>
      <button style={buttonStyle}
    onClick={handleStop}>stop</button>
      <button style={buttonStyle}
      onClick={handlereset}>reset</button>
    </div>
  );
}