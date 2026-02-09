import React from 'react'
import useAPICustomHook from '../Component/useAPICustomHook'

export default function Contact() {
  const {data:user,error,loading}=useAPICustomHook("https://jsonplaceholder.typicode.com/users")

  if(loading) return <p>Loading...</p>
    if(error) return <p style={{color:"red"}}>{error}</p>
  return (
    <div>
      <h4>Customer details</h4>
      {user.map((user)=>(
        <div key={user.id}>{user.name}</div>

      ))}
      <h2>Contact component</h2>
    </div>
  )
}
