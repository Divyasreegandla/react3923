import React,{useState} from 'react'

export default function RegisterForm() {
    const[formData,setFormData]=useState({
        name:"",
        email:"",
        age:""
    })
    const handleInput = (e)=>{
      const {name,value}=e.target
        setFormData({
            ...formData,
            [name]:value
        })
    };
    // const handleInput = (e)=>{
    //     setFormData({
    //         ...formData,
    //         [e.target.name]:e.target.value
    //     })
    // }
  return (
    <div className="register">
      <h2>Multi input Example</h2>
      <input name="name" type="text" value={formData.name}
       placeholder="Enter name"
      onChange={handleInput}/>

      <input name="email" type="email" value={formData.email}
       placeholder="Enter email"
       onChange={handleInput}
       />
      <input name="age" type="number" value={formData.age}
       placeholder="Enter age" 
       onChange={handleInput}
      />
    </div>
  )
}
