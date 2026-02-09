
import React, { useContext } from "react";
import ContextForm from "./ContextForm";
import { Pass } from "../App";

export default function ContextHook() {
  const { mode, data } = useContext(Pass);
  return (
    <div className={mode}>
      <ContextForm />
      <input type="text" value={data.name} />
    </div>
  );
}
