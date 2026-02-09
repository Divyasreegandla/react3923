import React, { useState, useEffect } from 'react'


export default function CrudOperations() {
    const [user,setUser]=useState([]);
     const[name,setName]=useState("");
    const[email,setEmail]=useState("");

    const[edit,setEdit]=useState(false);

     useEffect(()=>{
            fetch("https://jsonplaceholder.typicode.com/users")
            .then((res)=>res.json())
            .then((data)=>{
                setUser(data);
            })
        },[]);

        //Create Update
    const handleSubmit=()=>{
        const trimmedName=name.trim();
        const trimmedEmail=email.trim();

        if(trimmedName&&trimmedEmail){
            if(edit){
                fetch(`https://jsonplaceholder.typicode.com/users/${edit}`,{
                    method:"PUT",
                    body:JSON.stringify({
                        name:trimmedName,
                        email:trimmedEmail
                    }),
                    headers:{
                        "content-Type":"application/json;charset=UTF-8"
                    },
                })
                .then((res)=>res.json()
            .then(()=>{
                setUser(user.map(u=>u.id===edit?{
                    ...u,name:trimmedName,email:trimmedEmail
                }:u));
                setName("");
                setEmail("");
                setEdit(null);
            }));
            //post
            }else{
                fetch("https://jsonplaceholder.typicode.com/users",{
                    method:"POST",
                    body:JSON.stringify({
                        name:trimmedName,
                        email:trimmedEmail
                    }),
                    headers:{
                        "content-Type":"application/json;charset=UTF-8"
                    },
                })
                .then((res)=>res.json())
            .then((data)=>{
                 const maxId=user.length>0?Math.max(...user.map(u=>u.id)):0;
                 const newUser={...data,id:maxId+1};
                    setUser([...user,newUser]);
                   setName("");
                   setEmail("");
                   setEdit(null);
            });
        }
    }
};

//delete
 const handleDelete= (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then((data)=>{
            setUser((user)=>{
                return user.filter((user)=>user.id!==id)
            });

        });
    };

    const handleEditClick=(selectUser)=>{
        setEdit(selectUser.id);
        setName(selectUser.name);
        setEmail(selectUser.email);
    }


  return (
    <div className="header">
      <h2>Crud Operations</h2>

      <table className="table">
        <thead>
            <tr className="tableRow">
                <th>s.no</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {user.map((u)=>(
                <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>
                        <button className="btn-edit" onClick={()=>handleEditClick(u)}>
                            Edit

                        </button>
                        <button className="btn-del" onClick={()=>
                            handleDelete(u.id)
                        }>
                            Delete

                        </button>
                    </td>
                </tr>

            ))}

            <tr>
                <td>
                    {edit?`Editing ${edit}`:"New"}
                </td>

                <td className="form">
                    <input type="text"
                    value={name}
                    placeholder="Enter name"
                    onChange={(e)=>
                        setName(e.target.value)
                    } />
                </td>

                <td className="form">
                    <input type="text"
                    value={email}
                    placeholder="Enter Email"
                    onChange={(e)=>
                        setEmail(e.target.value)
                    } />
                </td>

                <td className="form">
                    <button className="btn-add" onClick={handleSubmit}>
                        {edit?"Update":"Add"}
                    </button>

                </td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}
