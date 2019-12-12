import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/shared/Navbar.jsx'
import SignIn from './SignIn'
import SignUp from './SignUp'
import '../styles/Flex.css'
import '../styles/Header.css'


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login: true,
      animation_id: 'login-start'
    }
  }

  toggleLogin = () => {
    this.state.login ? this.setState({ login: false }) : this.setState({ login: true })
  }

  toggleLoginAnimation = () => {
    this.state.animation_id === 'login-active' ? this.setState({ animation_id: 'login-not-active'}) : this.setState({ animation_id: 'login-active'})
  }

  authenticatedLinks = () => (
    <div className="nav-links flex-row authed">
      {/* <NavLink to="/change-password">Change Password</NavLink> */}
      <div className='dropdown-container'>
        <h3 className='navlink-text dropdown-text'>Tracks</h3>
        <div className='dropdown-menu'>
          <div className='flex-col'>
            <NavLink to="/tracks" className='navlink-text dropdown-text'>Public Tracks</NavLink>
            <NavLink to="/my-tracks" className='navlink-text dropdown-text'>My Tracks</NavLink>
          </div>
        </div>
      </div>
      <NavLink to="/sign-out" className='navlink-text'>Sign Out</NavLink>
    </div>

  )

  unauthenticatedLinks = (props, setUser, login) => (
    <div className="nav-links flex-row">
      <NavLink to="/tracks" className='navlink-text'>Public Tracks</NavLink>
      <div className='dropdown-container'>
        <h3 onClick={this.toggleLoginAnimation} style={{cursor: 'pointer'}} className='navlink-text dropdown-text'>Log in</h3>
        <div id={`${this.state.animation_id}`} className='dropdown-login flex-col'>
          {login ? <SignIn {...props} toggleLogin={this.toggleLogin} setUser={setUser} /> : <SignUp {...props} setUser={setUser} toggleLogin={this.toggleLogin} />}
        </div>
      </div>
    </div>
  )

  alwaysLinks = () => (
    <div className="brand-link flex-row">
      <NavLink to="/">
        <h3>RICHORD</h3>
      </NavLink>
    </div>
  )

  render() {
    const { user, setUser } = this.props
    return (
      <React.Fragment>
      <Navbar>
        <div className="nav flex-row">
          {this.alwaysLinks()}
          {user && <span className="navbar-text greeting">Logged in as: {user.username}</span>}
          {user ? this.authenticatedLinks : this.unauthenticatedLinks(this.props, setUser, this.state.login)}
        </div>
      </Navbar>
      </React.Fragment>
    )
  }
}

export default Header
