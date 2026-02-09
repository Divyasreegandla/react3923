import React,{useState,useEffect} from 'react'

export default function UseEffectTimer() {
    const[seconds,setSeconds]=useState(0)

    useEffect(()=>{
        const interval=setInterval(()=>{
            setSeconds(prev=>prev+1)
        },1000)

        return ()=>{
            clearInterval(interval)
        }
    },[])
  return (
    <div>
      <h2>Seconds:{seconds}</h2>
    </div>
  )
}