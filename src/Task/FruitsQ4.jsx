import React from 'react'

export default function FruitsQ4() {
    const fruits=["mango","banan","apple"]
  return (
    <div>
      <h2>Fruits List</h2>
      <ul>
         {fruits.map((fruit,ind)=>(
            <li key={ind}>{fruit}</li>
        ))}
      </ul>
    </div>
  )
}
