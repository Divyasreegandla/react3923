import React, { useId } from "react";

export default function UseIdHook() {
  const name = useId();
  const email = useId();
  const age = useId();
  console.log(name, email);

  return (
    <div>
      <nav>
        <label htmlFor={name}>Name</label>
        <input type="text" id={name} />
      </nav>
      <nav>
        <label htmlFor={email}>email</label>
        <input type="text" id={email} />
      </nav>
      <nav>
        <label htmlFor={`${age}-age`}>Age</label>
        <input type="text" id={`${age}-age`} />
      </nav>
    </div>
  );
}