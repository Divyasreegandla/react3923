import React,{useState} from 'react'
import "./Dark.css"

export default function Dark() {
    const[darkMode,setDarkMode]=useState(false);
  return (
    <div style={{backgroundColor:darkMode?"#333":"#fff",
    color:darkMode?"#fff":"#333",padding:"30px"}}>

        <button className="darkButton" onClick={()=>setDarkMode(!darkMode)}>Switch To {darkMode?"Light":"Dark"} mode</button>
        <p>You are in {darkMode?"Dark":"Light"} mode</p>
      <div className="darkbox"></div>
    </div>
  )
}
