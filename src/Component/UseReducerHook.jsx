import React, { useReducer } from "react";

export default function UseReducerHook() {
  let initilState = { count: 0 };
  function reducerFun(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  }

  // action={
  //   type: "reset"
  // }

  const [state, dispatch] = useReducer(reducerFun, initilState);

// initilState = { count: 0 };

// state={ count: 0 }



  return (
    <>
      <div>
        <h1>Count:{initilState.count}</h1>
        <h1>Count:{state.count}</h1>
        
        <button onClick={() => dispatch({ type: "increment" })}>
          increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      </div>
    </>
  );
}