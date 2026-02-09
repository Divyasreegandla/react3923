import React from 'react'

export default function ConditionalRendering() {
    const user=true
  return (
    <div>
        {/* {tearnary operator} */}
        {user? <h2>Welcome back</h2>: <h2>Please login</h2>}
     
      <button>Sign out</button>

      {/* {logical operator} */}

      {user && (<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Reiciendis aut voluptate deleniti, minima distinctio ipsa quae 
        excepturi libero hic quasi alias tempora 
        possimus in aliquam amet. Quia fugit vero quibusdam?</p>)}
    </div>
  )
}
