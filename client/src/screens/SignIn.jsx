import React, { Component } from 'react'
import { signInUser } from '../services/auth'

class SignIn extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
      isError: false,
      errorMsg: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      isError: false,
      errorMsg: ''
    })
  }

  onSignIn = event => {
    event.preventDefault()

    const { setUser } = this.props

    signInUser(this.state)
      .then(res => setUser(res.user))
      .catch(error => {
        console.error(error)
        this.setState({
          isError: true,
          errorMsg: 'Invalid Credentials',
          username: '',
          password: ''
        })
      })
  }

  renderError = () => {
    const toggleForm = this.state.isError ? 'danger' : 'none'
    if (this.state.isError) {
      return (
        <>
          <div className='flex-row flex-end'>
            <button type="submit">Sign In</button>
          </div>
          <p className={toggleForm}>{this.state.errorMsg}</p>
        </>
      )
    } else {
      return <div className='flex-row flex-end'><button className='login-submit'>Sign In</button></div>
    }
  }

  render() {
    const { username, password } = this.state

    return (
      <>
        <h3 className='login-prompt'>Sign In</h3>
        <form onSubmit={this.onSignIn}>

          <p className='input-prompt'>Username</p>
          <input
            required
            type="text"
            name="username"
            value={username}
            placeholder="Enter Username"
            onChange={this.handleChange}
            className='login-children'
          />

          <p className='input-prompt'>Password</p>
          <input
            required
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
            className='login-children'
          />
          {this.renderError()}
        </form>
        <div className='buttons-container flex-col'>
          <div className='toggle-container flex-col'>
            <p>Dont have an account?</p>
            <button className='login-toggle' onClick={this.props.toggleLogin}>Register here</button>
          </div>
        </div>
      </>
    )
  }
}

export default SignIn
