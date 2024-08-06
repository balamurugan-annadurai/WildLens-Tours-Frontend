import React, { useEffect } from 'react'
import "./Dashboard.css"
import { Link, NavLink, Outlet } from 'react-router-dom'
const Dashboard = () => {

    return (
        <>
            <div class="dashboard">

                <div class="topbar">
                    <div className="container inner-header">
                        <div className="logo">
                            <h1 className='d-flex align-items-center'><i className='bx bxs-leaf mx-2'></i>WildLens Tours</h1>
                        </div>
                        <button className='return-btn'><i class='bx bxs-chevrons-left' ></i>Logout</button>
                    </div>
                </div>

                <div class="sidebar">
                    <ul>
                        <li>
                            <NavLink to="home"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                                <i class='bx bxs-home' ></i>
                                <div>Home</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="users"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                                <i class='bx bxs-user'></i>
                                <div>Users</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="marketing"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                                <i class='bx bxs-envelope' ></i>
                                <div>Marketing</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="tours"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                                <i class='bx bxs-plane-alt' ></i>
                                <div>Tours</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="bookings"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                                <i class='bx bxs-book-alt'></i>
                                <div>Bookings</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="home"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                                <i class='bx bxs-message-dots' ></i>
                                <div>Messages</div>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <Outlet />
            </div>

        </>
    )
}

export default Dashboard