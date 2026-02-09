import React from 'react'

export default function DigitalMarketing() {
    const lists=["Marketing Fundamentals","Public Reactions","Video &Mobile marketing","Product marketing"]
  const divstyle={
        marginTop:"40px",
        padding:'30px',
        backgroundColor:"#f9f9fb",
        borderRadius:"0 4px 15px rgba(0,0,0,0.1)",
        textAlign:"center",
        borderLeft:"5px solid blueviolet",
        width:"100%"
    };
    const title={
        color:"blueviolet",
        fontSize:"2.5rem",
        marginBottom:"10px",
        fontFamily:"sans-serif"
    };

    const  text={
        color:"#555",
        fontSize:"1.1rem",
        lineHeight:"1.6",
        maxWidth:"600px",
        margin:"0 auto"
    };

  return (
    <div style={divstyle}>
      <h2 style={title}>Digital Marketing</h2>
      <p style={text}>Digital marketing leverages internet-connected technologies—including websites, social media, search engines, and mobile apps—to promote products, services, and brands, offering measurable results and targeted, two-way, or interactive communication with audiences.</p>
      <h3>Popular Topics</h3>
      <ul style={{display:"inline-block",textAlign:"center",
        padding:0,
        marginTop:"15px",listStyleType:"disc"
      }}>
        {lists.map((list1,ind)=>(
            <li style={{marginBottom:"8px",fontFamily:"sans-serif",color:"#444"}} key={ind}>{list1}</li>
        ))}
      </ul>
    </div>
  )
}
