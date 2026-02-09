import React from 'react'

export default function ListRendering() {
    const fruits=["apple","banana","orange","mango","grapes"]

    const users=[
      // {id:1,name:"hari"},
      // {id:2,name:"raj"},
      // {id:3,name:"kumar"},
      ];
      const theme={
        backgroundColor:"yellow",
        color:"red",
        padding:"50px",
      }

  return (
    <div style={theme}>
      <h3>fruits data</h3>
      <ul>
        {/* <li>apple</li>
        <li>banana</li>
        <li>orange</li>
        <li>apple</li> */}
        {fruits.map((fruit,ind)=>(
            <li key={ind}>{fruit}</li>
        ))}

      </ul>
      <h3>users data</h3>
      {users.length>0?(
      <ul>
        {users.map((user)=>(
          <li key={user.id}>{user.name}</li>

        ))}
      </ul>):(<p>no data found</p>)}
    </div>
  )
}
