import React from 'react'

export default function EvenNumbersQ5() {
    const numbers=[1,2,3,4,5]
  return (
    <div>
      <h2 >Even Numbers</h2>
      <ul>
        {numbers.map((number,ind)=>(
            number%2===0 && (<li key={ind}>{number}</li>)
        ))}
      </ul>
    </div>
  )
}
