import React,{useState} from 'react'

export default function UsestateCount() {
    const[count,setCount]=useState(0);

    const[user,setUser]=useState(true);
  return (
    <div className="Count">
        {user?(<p>Welcome back after long days....</p>
        ):(<p>Please login.. bye bye...</p>)}
        <button onClick={()=>setUser(!user)}>Sign{user?" out":" in"}</button>
      <h2>count:{count}</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}
