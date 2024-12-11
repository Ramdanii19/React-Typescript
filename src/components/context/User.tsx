import { useContext } from "react"
import { UserContext } from "./UserContext"

export const User = () => {
  const userContext = useContext(UserContext)
  const handleLogin = () => {
    if (userContext) {
      userContext.setUser({
        name: 'ramdan',
        email: 'ramdan@gmail.com'
      })
    }
  }
  const handleLogout = () => {
    if (userContext) {
      userContext.setUser(null)
    }
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div className="">{userContext.user?.name}</div>
      <div className="">{userContext.user?.email}</div>
    </div>
  )
}
