import React from 'react'

export default function WelcomeQ2() {
  const isLoggedIn=true
  return (
    <div>
      {isLoggedIn?(<h2>Welcome User</h2>):(<h2>Please <Login></Login></h2>)
      }
    </div>
  )
}
