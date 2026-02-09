import React from 'react'

export default function WebDevelopment() {
    const lists=["JavaScript","React JS","Angular","TypeScript","Node.js","CSS"]
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
      <h2 style={title}>Web Development</h2>
      <p style={text}>Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.</p>
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
