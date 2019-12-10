import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/shared/Navbar.jsx'

const authenticatedLinks = (
  <div className="nav-links">
    {/* <NavLink to="/change-password">Change Password</NavLink> */}
    <NavLink to="/my-tracks">My Tracks</NavLink>
    <NavLink to="/sign-out">Sign Out</NavLink>
  </div>
)

const unauthenticatedLinks = (
  <div className="nav-links">
    <NavLink to="/sign-up">Sign Up</NavLink>
    <NavLink to="/sign-in">Sign In</NavLink>
  </div>
)

const alwaysLinks = (
  <div className="nav-links">
    <NavLink to="/">Home</NavLink>
    <NavLink to="tracks">Public Tracks</NavLink>
  </div>
)

const Header = ({ user }) => (
  <Navbar>
    <h3 className="brand">RICHORD</h3>
    <div className="nav">
      {user && <span className="navbar-text">Welcome, {user.username}</span>}
      {alwaysLinks}
      {user ? authenticatedLinks : unauthenticatedLinks}
    </div>
  </Navbar>
)

export default Header
