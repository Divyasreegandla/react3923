import React, { useState } from 'react'

export default function MiniChat() {
    const [text,setText]=useState("");
    const [messages,setMessages]=useState([]);

    const send=()=>{
        if(text !==""){
            setMessages([...messages,text]);
            setText("");
        }
    }
    const styleing={
        heading:{
            backgroundColor:"#f5f7f8",
            height:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            fontFamily:"sans-serif"
        },
        content:{
            width:"400px",
            height:"500px",
            backgroundColor:"#ffff",
            borderRadius:"20px",
            boxShadow:"0 10px 25px",
            display:"flex",
            flexDirection:"column",
            overFlow:"hidden"
        },
        header:{
            backgroundColor:"#5d5fef",
            color:"white",
            margin:0,
            padding:"15px",
            fontSize:"20px",
            textAlign:"center"
        },
        input:{
            padding:"15px",
            display:"flex",
            gap:"10px",
        
        },
        input1:{
            flex:1,
            padding:"10px",
            borderRadius:"15px",
            outline:"none"
        },
        button:{
            backgroundColor:"#5d5fef",
            color:"white",
            border:"none",
            padding:"10px 15px",
            borderRadius:"15px",
            cursor:"pointer",
            fontWeight:"bold"
        },
        chat:{
            flex:1,
            padding:"15px",
            overFlow:"auto",
            backgroundColor:"#f9f9f9",
            display:"flex",
            flexDirection:"column",

        },
        chat1:{
            alignSelf:"flex-start",
            backgroundColor:"#e9e9ff",
            padding:"6px 12px",
            borderRadius:"8px",
            maxWidth:"80%",
            fontSize:"14px",
            wordWrap:"break-word"

        }


    }
  return (
    <div style={styleing.heading}>
        <div style={styleing.content}>
      <h1 style={styleing.header}>Mini Chat Application</h1>

      <div style={styleing.input}>
        <input type="text"
        placeholder='Type a message....'
        value={text}
        onChange={(e)=>
            setText(e.target.value)
        } style={styleing.input1}/>
        <button style={styleing.button} onClick={send}>Send Message</button>
      </div >

      <div style={styleing.chat}>
        {messages.map((message,ind)=>(
            <p style={styleing.chat1} key={ind} >{message}</p>
        ))}
      </div>
    </div>
    </div>
  )
}
