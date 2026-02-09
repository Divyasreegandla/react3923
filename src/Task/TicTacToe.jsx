import React, { useState } from 'react'

export default function TicTacToe() {
    const [xo,setXo]=useState(Array(9).fill(""));
    const[next,setNext]=useState(true);

    const checkWinner=(square)=>{
        const line=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        for (let[a,b,c] of line){
            if(square[a]&& square[a]===square[b]&&square[a]===square[c]){
                return {winner :square[a],line:[a,b,c]};
            }
        }
        return null;
    }
    const result=checkWinner(xo);
    const winner=result?.winner;
    const winning=result?.line||[];

    function handleClick(i){
        if(xo[i]!=="") return;
    let newXo=[...xo];
    newXo[i]=next?"X":"O";
    setXo(newXo);
    setNext(!next);
}
  return (
    <div style={{textAlign:"center",backgroundColor:"#1a1a2e",height:"700px"}}>
      <h1 style={{padding:"10px",color:"white",backgroundColor:"#320c6e"}}>Next Player: <span style={{color:"#bbe7b2"}}>{next?"X":"O"}</span></h1>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,80px", justifyContent:"center",gap:"5px",boxShadow:"10px"}}>
        {xo.map((val,i)=>(
            <button key={i}
            onClick={()=>handleClick(i)}
            style={{width:"80px", height:"80px",fontSize:"24px",backgroundColor:winning.includes(i)?"#2ad34f":"#b1f7c0",}}>
              <span style={{color:val==="X"?"#ffd700":"#c0c0c0",textShadow:"0 0 10px white",fontSize:"40px"}}> {val}</span> 
            </button>
        ))}
        
      </div>
      <div style={{color:"#c6f052",textAlign:"center",fontSize:"25px",padding:"20px"}}>{winner?(<>Winner is:{winner}
       <h2 style={{textAlign:"center",color:"#e94560",textShadow:"0 0 10px #e94560"}}>
        Congratulations</h2></>):""}</div>
      <button onClick={()=>
        setXo(Array(9).fill(""))
      } style={{marginTop:"20px",color:"#e7e5f5",backgroundColor:"#180f8f"}}>Reset Game</button>
    </div>
  )
}
