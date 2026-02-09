import React, { useEffect, useState } from 'react'
import UseCallBack from '../Component/UseCallBack'
import { useNavigate } from 'react-router-dom'
import APIIntgration from '../Component/APIIntgration';

export default function Home() {
  const page=useNavigate();
  const[count,setCount]=useState(0);

  useEffect(()=>{
    if(count==10){
      page("/Service");
    }
  },[count]);
  return (
    <div>
      <APIIntgration/>
      <h2>Home component hello</h2>
      <UseCallBack/>
      <button onClick={()=>page("/Service")}>Move to service Page</button>
      <h2>count:{count}</h2>
      <button onClick={()=>setCount(count+1)}>increment</button>
    </div>
  )
}
