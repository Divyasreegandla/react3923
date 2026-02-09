import React, { useEffect, useState } from 'react'

export default function APIIntgration() {
    const[user,setUser]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)

    useEffect(()=>{
        async function fetchUsers() {
            try{

                setLoading(true);
                const response=await fetch("https://jsonplaceholder.typicode.com/users")
                if(!response.ok){
                    throw new Error("Failed to fetch data")

                }
                const data=await response.json();
                setUser(data);
            }catch(err){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        }
        fetchUsers();
    },[])
    if(loading) return <p>Loading...</p>
    if(error) return <p style={{color:"red"}}>{error}</p>
  return (
    <div>
        <h2>User List</h2>
        {user.map((user=>(
            <div key={user.id} style={{border:"1px solid #ccc",
                 padding:"10px",
            marginBottom:"10px"}}>
                <h3>{user.name}</h3>
                <h3>{user.phone}</h3>

            </div>
        )))}
    </div>
  )
}
