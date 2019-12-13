import React, { Component } from 'react'
import { signUp, signInUser } from '../services/auth'

class SignUp extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      isError: false,
      errorMsg: ''
    }
  }

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value,
      isError: false,
      errorMsg: ''
    })

  onSignUp = event => {
    event.preventDefault()

    const { setUser } = this.props

    signUp(this.state)
      .then(() => signInUser(this.state))
      .then(res => setUser(res.user))
      .catch(error => {
        console.error(error)
        this.setState({
          email: '',
          password: '',
          passwordConfirmation: '',
          isError: true,
          errorMsg: 'Sign Up Details Invalid'
        })
      })
  }

  renderError = () => {
    const toggleForm = this.state.isError ? 'danger' : ''
    if (this.state.isError) {
      return (
        <>
          <button type="submit">Sign Up</button>
          <p className={toggleForm}>{this.state.errorMsg}</p>
        </>
      )
    } else {
      return <div className='flex-row flex-end'><button className='login-submit'>Sign Up</button></div>
    }
  }


  render() {
    const { email, username, password, passwordConfirmation } = this.state

    return (
      <>
        <h3 className='login-prompt'>Sign Up</h3>
        <form onSubmit={this.onSignUp}>

            <p className='input-prompt'>Username</p>
            <input
              required
              type="text"
              name="username"
              value={username}
              placeholder="Enter username"
              onChange={this.handleChange}
              className='login-children'
            />
            <p className='input-prompt'>Email address</p>
            <input
              required
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
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
            <p className='input-prompt'>Password Confirmation</p>
            <input
              required
              name="passwordConfirmation"
              value={passwordConfirmation}
              type="password"
              placeholder="Confirm Password"
              onChange={this.handleChange}
              className='login-children'
            />
          {this.renderError()}
        </form>
        <div className='buttons-container flex-col'>
          <div className='toggle-container flex-col'>
            <p>Already registered?</p>
            <button className='login-toggle' onClick={this.props.toggleLogin}>Login here</button>
          </div>
        </div>
      </>
    )
  }
}

export default SignUp
