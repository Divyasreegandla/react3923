import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ListData() {
    const [users,setUser]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>{
            setUser(data);
        });
    },[]);
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user)=>(
            <li key={user.id}>
                <Link to={`/Blogs/${user.id}`}>{" "} {user.id}.{user.name}</Link>
            </li>
        ))}
      </ul>
    </div>
  )
}
