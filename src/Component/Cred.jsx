import React, { useEffect, useState } from 'react'

export default function Cred() {
    const [user,setUser]=useState([])

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>{
            setUser(data)
        })
    },[]);

    const addItem=()=>{
        const trimmedName=name.trim();
        const trimmedEmail=email.trim();

        if(name&&email){
            fetch("https://jsonplaceholder.typicode.com/users",{
                method:"POST",
                body:JSON.stringify({
                    name:trimmedName,
                    email:trimmedEmail
                }),
                headers:{
                    "content-Type":"application/json;charset=UTF-8",
                },
                     
            })
            .then((res)=>res.json())
                .then((data)=>{
                    const newUser={...data,id:user.length+1};
                    setUser([...user,newUser]);
                    setEmail("");
                    setName("");
         });
            
        }
    };
    const handleDelete= (id) => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then((data)=>{
            setUser((user)=>{
                return user.filter((user)=>user.id!==id)
            });

        });
    };
// array name=[{},{}.{},{},,,,,]

  return (
    <div>
      <h2>CRED Operation</h2>

      <table>
        <thead>
            <tr>
                <td>s.no</td>
                <td>name</td>
                <td>email</td>
                <td>delete</td>
            </tr>
        </thead>
        <tbody>
            {user.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button onClick={() => handleDelete(user.id)}>Delete</button>
                        </td>
                    </tr>
                ))
            }
            <tr>
                <td></td>
                <td><input type="text" 
                value={name}
                 onChange={(e)=>setName(e.target.value)} /></td>
                 <td>
                    <input type="text" 
                value={email}
                 onChange={(e)=>setEmail(e.target.value)}/></td>    
                  <td>
                    <button onClick={addItem}>Update</button></td>     
   </tr>
  
        </tbody>
      </table>
    </div>
  )
}
