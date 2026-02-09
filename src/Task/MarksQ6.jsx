import React from 'react'

export default function MarksQ6({marks}) {
    const result=marks>=40?"pass":"fail" ;
  return (
    <div>
        <h2>Results</h2>
        <p>Marks: {marks}</p>
        <p>Results:{result}</p>
    </div>
  )
}
