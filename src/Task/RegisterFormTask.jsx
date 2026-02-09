import React,{useState} from 'react'

export default function RegisterFormTask() {
    const[formData,setFormData]=useState({
        name:"",
        email:"",
        age:"",
        address:"",
        city:"",
        pincode:"",
        country:"",
        phoneNo:"",
        gender:"",
        occupation:"",
        company:"",
        qualification:"",
    })
    const handleInput = (e)=>{
      const {name,value}=e.target
        setFormData({
            ...formData,
            [name]:value
        })
    };
  return (
    <div style={{backgroundColor:"#b97f7f", padding:"30px", gap:"20px", color:"black"}}>

      <h2>Multi input Registration form</h2>
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

      <input name="address" type="text" value={formData.address}
       placeholder="Enter address"
       onChange={handleInput}
       />
      <input name="city" type="text" value={formData.city}
       placeholder="Enter city" 
       onChange={handleInput}
      />
      <input name="pincode" type="number" value={formData.pincodeincode}
       placeholder="Enter pincode"
       onChange={handleInput}
       />
      <input name="country" type="text" value={formData.country}
       placeholder="Enter country" 
       onChange={handleInput}
      />
      <input name="phoneNo" type="number" value={formData.phoneNo}
       placeholder="Enter phoneNo"
       onChange={handleInput}
       />
      <input name="gender" type="text" value={formData.gender}
       placeholder="Enter gender" 
       onChange={handleInput}
      />
 <input name="occupation" type="text" value={formData.occupation}
       placeholder="Enter occupation"
       onChange={handleInput}
       />
      <input name="company" type="text" value={formData.company}
       placeholder="Enter company" 
       onChange={handleInput}
      />
      <input name="qualification" type="text" value={formData.qualification}
       placeholder="Enter qualification" 
       onChange={handleInput}
      />
      

    </div>
  )
}
