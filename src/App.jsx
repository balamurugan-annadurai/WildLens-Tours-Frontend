import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Sections/Home'
import "./App.css"
import Login from './Components/Auth/Login'
import SignUp from './Components/Auth/SignUp'
import ForgotPassword from './Components/Auth/ForgotPassword'
import AllToursDetails from './Components/Tours/AllToursDetails'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>
    },
    {
      path: "/login",
      element:<Login/>
    },
    {
      path: "/signup",
      element:<SignUp/>
    },
    {
      path: "/forgotpassword",
      element:<ForgotPassword/>
    },
    {
      path: "/alltours",
      element:<AllToursDetails/>
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App