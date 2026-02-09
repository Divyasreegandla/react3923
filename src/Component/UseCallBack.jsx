import React,{useCallback, useState} from 'react'
import UseCallBackList from './UseCallBackList'

export default function UseCallBack() {
    const[number,setNumber]=useState(1)
    const[dark,setDark]=useState(false)

    // const getItems=()=>{
    //     return [number,number+1,number+2,number+3];
    // }

    const getItems=useCallback(()=>{
        return [number,number+1,number+2,number+3];
    },[number]);

    const theme={
        backgroundColor:dark?"#333":"#fff",
        color:dark?"#fff":"#333",
        padding:"20px"
    }
  return (
    <div style={theme}>
        <input type="number"
        value={number}
        onChange={(e)=> setNumber(parseInt(e.target.value))} />
    <button onClick={()=>setDark(!dark)}>Toggle the theme</button>
    <UseCallBackList getItems={getItems}/>

    </div>
  )
}
