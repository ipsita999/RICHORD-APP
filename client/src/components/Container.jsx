import React, { Component } from 'react'
import { getTracks } from '../services/calls'
import Routes from '../routes'
import Header from '../screens/Header'

export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      tracks: null
    }
  }

  async componentDidMount() {
    this.fetchTracks()
  }

  fetchTracks = async () => {
    try {
      const tracks = await getTracks()
      this.setState({ tracks })
      console.log(tracks)
    } catch (err) {
      console.error(err)
    }
  }

  addTrack = track => this.setState({ tracks: [...this.state.tracks, track] })

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  render() {
    const { user } = this.state
    return (
      <>
        <Header user={user} {...this.props} setUser={this.setUser}/>
        <main className="container">
          <Routes
            getTracks={this.fetchTracks}
            tracks={this.state.tracks}
            user={user}
            setUser={this.setUser}
            addTrack={this.addTrack}
            clearUser={this.clearUser}
          />
        </main>
      </>
    )
  }
}
