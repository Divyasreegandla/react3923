
import React,{useContext} from "react";
import { Pass } from "../App";

export default function Third() {
  const passName = useContext(Pass);
  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <h2>Third Component---{passName}</h2>
    </div>
  );
}
