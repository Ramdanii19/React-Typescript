import React, { useState } from 'react'

export const LoggedIn = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleLogin = () => {
    setIsLoggedIn(true)
  }
  const handleLogout = () => {
    setIsLoggedIn(false)
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div className="">USer is {isLoggedIn ? 'logged on' : 'logged out'}</div>
    </div>
  )
}
