import React,{useState,useEffect} from 'react'

export default function Timer() {
  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="card">
      <h2>Timer</h2>
      <h1>{seconds} sec</h1>
      <div className="button-group">
        <button onClick={() => setIsActive(true)}>Start</button>
        <button onClick={() => setIsActive(false)}>Stop</button>
        <button onClick={() => { setIsActive(false); setSeconds(60); }}>Reset</button>
      </div>
    </div>
  )
}
