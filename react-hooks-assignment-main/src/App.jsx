import React from 'react'
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import './App.css'
import { Home } from './Components/Home'
import { Login } from './Components/Login'
import { TodosCreate } from './Components/TodosCreate'
import { useSelector } from 'react-redux'

const PrivateRoute = ({isAuthenticated, children}) => {
    return isAuthenticated ? children : <Navigate to="/login" />
}

function App() {
  const {isAuthenticated} = useSelector((state) => state.login)

  return (
    <div>
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/todos-create">Create_todos</Link>
    </div>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" 
        element={
        <PrivateRoute isAuthenticated={isAuthenticated}>
          <Home/>
        </PrivateRoute>}>
        </Route>
        <Route path="/todos-create" 
        element={
        <PrivateRoute isAuthenticated={isAuthenticated}>
          <TodosCreate/>
        </PrivateRoute>}>
        </Route>
      </Routes>
    </div>
  )
}

export default App
