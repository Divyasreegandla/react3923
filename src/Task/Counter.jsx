import React,{useState} from 'react'

export default function Counter() {
  const [count, setCount] = useState(0);
    
  return (
    <div className="card">
      <h2>Counter (useEffect)</h2>
      <h1>{count}</h1>
      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
      <button className="reset-btn" onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
