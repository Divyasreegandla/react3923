import React,{useState,useEffect} from 'react'

export default function UseCallBackList({getItems}) {
    const [items,setItems]=useState([])
    useEffect(()=>{
        setItems(getItems)
    },[getItems])
    console.log(items)

  return (
    <div>
      <h2>Usecall back list</h2>
      {items.map((items)=>(
        <div key={items}>{items}</div>
      ))}
      
    </div>
  )
}
