import React from 'react'

export default function OrderedListQ7({students}) {

  return (
    <div>
        <h1>Students names</h1>
      {students.map((name,ind)=>(
        <li key={ind}>{name}</li>
      ))}
    </div>
  )
}
