import React, { useState, useEffect } from "react";

export default function UseEffectAIP() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      // [{},{},{}.......{}]

      // data={}
      .then((data) => {
        setUser(data);
      });
  }, []);

  console.log(user);
  return (
    <div>
      <h1>User Data List</h1>
      <ul>
        {user.map((user) => (
          <li key={user.id}>
            {user.name}--{user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}