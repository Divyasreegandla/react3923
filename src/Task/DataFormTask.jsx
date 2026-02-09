import React,{useState} from 'react'

export default function DataFormTask() {
    const [formData,setFormData]=useState({
        userName:"",
        email:"",
        password:"",
        address:"",
        city:"",
        pincode:"",
        country:"",
        phoneNo:"",
        gender:"",
        occupation:"",
        company:"",
        qualification:"",
        term:false,
    })
    const[error,setError]=useState("")

    const handleChange=(e)=>{
        const{name,value,type,checked}=e.target;
        setFormData({
            ...formData,
            [name]:type==="checkbox"? checked:value,
        })
    }
    const handlesubmit=(e)=>{
      e.preventDefault();
      if(!formData.userName || !formData.email || !formData.password || !formData.address || !formData.city || !formData.pincode 
        || !formData.country || !formData.phoneNo || !formData.gender || !formData.occupation || !formData.company || !formData.qualification
      ){
        setError("all the fiels are required")
        return;
      }
      if(!formData.term){
        setError("accept the check box");
        return;
      }
      setError("");

    alert("form is submitted successfully");
    console.log(formData);
      
    }
  return (
    <div>
      <form onSubmit={handlesubmit} >
        <h2>Data Form application</h2>
        {error && <h3 style={{color:"red"}}>{error}</h3>}
        <input type="text" name="userName" value={formData.userName}
         placeholder='enter a name' onChange={handleChange}/>
        
        <input type="email" name="email" value={formData.email} 
        placeholder='enter a email' onChange={handleChange}/>
        
        <input type="password" name="password" value={formData.password}
         placeholder='enter the password' onChange={handleChange}/>
        
        <input type="text" name="address" value={formData.address}
         placeholder='enter the address' onChange={handleChange}/>
        
        <input type="text" name="city" value={formData.city}
         placeholder='enter the city' onChange={handleChange}/>
        
        <input type="number" name="pincode" value={formData.pincode}
         placeholder='enter the pincode' onChange={handleChange}/>
        
        <input type="text" name="country" value={formData.country}
         placeholder='enter the country' onChange={handleChange}/>
        
        <input type="number" name="phoneNo" value={formData.phoneNo}
         placeholder='enter the phoneNo' onChange={handleChange}/>

         <input type="text" name="gender" value={formData.gender}
         placeholder='enter the gender' onChange={handleChange}/>
        
        <input type="text" name="occupation" value={formData.occupation}
         placeholder='enter the occupation' onChange={handleChange}/>
        
        <input type="text" name="company" value={formData.company}
         placeholder='enter the company' onChange={handleChange}/>
        
        <input type="text" name="qualification" value={formData.qualification}
         placeholder='enter the qualification' onChange={handleChange}/>
        
        
        <input type="checkbox" name="term" value={formData.term}
         onChange={handleChange}/>
      <button type='submit'>Submit</button>

      </form>
    </div>
  )
}
