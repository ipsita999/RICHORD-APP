import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/shared/Navbar.jsx'
import SignIn from './SignIn'
import SignUp from './SignUp'
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
    this.state.animation_id === 'login-active' ? this.setState({ animation_id: 'login-not-active' }) : this.setState({ animation_id: 'login-active' })
  }

  authenticatedLinks = () => (
    <div className="nav-links flex-row authed">
      <div className='dropdown-container flex-row'>
        <h3 className='navlink-text tracks flex-row'>Tracks</h3>
        <div className='dropdown-menu'>
          <NavLink to="/tracks" className='navlink-text dropdown-text'>Public Tracks</NavLink>
          <NavLink to="/create-tracks" className='navlink-text dropdown-text'>Create Track</NavLink>
          <NavLink to="/my-tracks" className='navlink-text dropdown-text'>My Tracks</NavLink>


        </div>
      </div>
      <NavLink to="/sign-out" className='navlink-text'>Sign Out</NavLink>
    </div>

  )

  unauthenticatedLinks = (props, setUser, login) => (
    <div className="nav-links flex-row">
      <NavLink to="/tracks" className='navlink-text flex-row'>Public Tracks</NavLink>
      <div className='dropdown-container flex-row'>
        <h3 onClick={this.toggleLoginAnimation} style={{ cursor: 'pointer' }} className='navlink-text'>Log in</h3>
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
            {user ? this.authenticatedLinks() : this.unauthenticatedLinks(this.props, setUser, this.state.login)}
          </div>
        </Navbar>
      </React.Fragment>
    )
  }
}

export default Header
