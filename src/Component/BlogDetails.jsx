import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function BlogDetails() {
    const {id}=useParams();
    const [user,setUser]=useState(null);

     useEffect(()=>{
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res)=>res.json())
            .then((data)=>{
                setUser(data);
            });
        },[id]);

        if(!user){
            return <h2>loading</h2>
        }
  return (
    <div style={{padding:"20px",backgroundColor:"#abcf7b"}}>
      <h2 style={{color:"#0b233b"}}>Details of Id: {id} - {user.name}
      </h2>
      <ul>
     <li>Name: {user.name}</li>
     <li>UserNmae: {user.username}</li>
     <li>Email: {user.email}</li>
     <li>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
        , {user.address.geo.lat}, {user.address.geo.lng}
     </li>
     <li>Phone: {user.phone}</li>
     <li>Website: {user.website}</li>
     <li>Company: {user.company.name}, {user.company.catchPhrase}, {user.company.bs}</li>
    
    </ul></div>
  )
}
