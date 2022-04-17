import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {login} from '../Redux/Login/action'
import {Navigate} from 'react-router-dom'

export const Login = () => {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const dispatch = useDispatch()
  const {isAuthenticated} = useSelector((state) => state.login)

  const handleLogin = () => {
    const payload = {
      username,
      password
    }
    dispatch(login(payload))
  }

  if(isAuthenticated) {
    return <Navigate to="/" />
  }

  return (
    <div>
    <br />
      <input type="text" placeholder='Enter Username' value={username} onChange = {
        (e) => setUsername(e.target.value)
      }/>
      <br />
      <br />
      <input type="password" placeholder='Enter Password' value={password} onChange = {
        (e) => setPassword(e.target.value)
      }/>
      <br /><br />
      <button onClick={handleLogin}>LOGIN</button>
    </div>
  )
}
