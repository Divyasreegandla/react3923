import React, { useReducer } from "react";
import { act } from "react";

export default function UseReducerForm() {
  const initilState = {
    name: "",
    email: "",
    password: "",
  };
  function formRegister(state, action) {
    return {
      ...state,
      [action.field]: action.value,
    };
  }

//   action={
//       field: e.target.name,
//       value: e.target.value,
//     }

  const [state, dispatch] = useReducer(formRegister, initilState);

  // state={
  //     name:"",
  //     eamil:"",
  //     password:"",
  // }
  function handleChange(e) {
    dispatch({
      field: e.target.name,
      value: e.target.value,
    });
  }
  return (
    <div>
      <h2>UseReducer hook form</h2>
      <input
        type="text"
        value={state.name}
        onChange={handleChange}
        name="name"
        placeholder="Enter a name"
      />
      <input
        type="email"
        value={state.eamil}
        onChange={handleChange}
        name="email"
        placeholder="Enter a email"
      />
      <input
        type="password"
        value={state.password}
        onChange={handleChange}
        name="password"
        placeholder="Enter a password"
      />
    </div>
  );
}