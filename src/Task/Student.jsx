import React from 'react'

export default function Student({name,age,gender,email,studentId,phoneNo,address,marks,course,pincode}) {
  return (
    <div style={{display:'flex' , gap:'20px'}}>
      <p>name:{name}</p>
      <p>age:{age}</p>
      <p>gender:{gender}</p>
      <p>email:{email}</p>
      <p>studentId:{studentId}</p>
      <p>phoneNo:{phoneNo}</p>
      <p>address:{address}</p>
      <p>marks:{marks}</p>
      <p>course:{course}</p>
      <p>pincode:{pincode}</p>


    </div>
  )
}

