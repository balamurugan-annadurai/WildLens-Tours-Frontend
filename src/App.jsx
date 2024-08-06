import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Sections/Home'
import "./App.css"
import Login from './Components/Auth/Login'
import SignUp from './Components/Auth/SignUp'
import ForgotPassword from './Components/Auth/ForgotPassword'
import AllToursDetails from './Components/Tours/AllToursDetails'
import IndividualTourDetail from './Components/Tours/IndividualTourDetail'
import Dashboard from './Components/AdminDashboard/Dashboard'
import DashboardHome from './Components/AdminDashboard/DashboardHome'
import DashboardUsers from './Components/AdminDashboard/DashboardUsers'
import DashboardMarketing from './Components/AdminDashboard/DashboardMarketing'
import DashboardTours from './Components/AdminDashboard/DashboardTours'
import DashboardBookings from './Components/AdminDashboard/DashboardBookings'
// import Admin from './Components/Dashboard/Admin'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path: "/forgotpassword",
      element: <ForgotPassword />
    },
    {
      path: "/alltours",
      element: <AllToursDetails />
    },
    {
      path: "/details",
      element: <IndividualTourDetail />
    },
    { path:"/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: 'home',
          element: <DashboardHome />
        },
        {
          path: 'users',
          element: <DashboardUsers/>
        },
        {
          path: 'marketing',
          element: <DashboardMarketing/>
        },
        {
          path: 'tours',
          element:<DashboardTours/>
        },
        {
          path: 'bookings',
          element:<DashboardBookings/>
        }
        
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App