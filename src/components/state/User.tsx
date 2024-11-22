import { useState } from "react"

type AuthUser = {
  name: string
  email: string
}
export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser)
  const handleLogin = () => {
    setUser({
      name: 'Ramdani',
      email: 'ramdani0519@gmail.com'
    })
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div className="">USer name is {user.name}</div>
      <div className="">USer name is {user.email}</div>
    </div>
  )
}
