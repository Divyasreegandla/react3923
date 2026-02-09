import React,{useEffect,useState} from 'react'

export default function UseEffectHook() {
    const [count,setCount]=useState(0);
    const[num,setNum]=useState(0);
    useEffect(()=>{
        console.log("component mounted");
        
    },[]);

    useEffect(()=>{
        console.log(`count changes to: ${count},${num}`);
        
    },[count, num]);
  return (
    <div>
      <h2>Hello every one</h2>
      <h3>Count:{count},Count:{num}</h3>
      <button onClick={()=>setCount(count+1)}>increment</button>
       <button onClick={()=>setNum(num+1)}>increment</button>
    </div>
  );
}
