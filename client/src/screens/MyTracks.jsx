import React, { Component } from 'react'
import { getUserTracks } from '../services/auth'
import '../styles/Tracks.css'

export default class MyTracks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tracks: []
        }
    }

    componentDidMount() {
        this.fetchUserTracks()

    }

    fetchUserTracks = async () => {
        try {
            const tracks = await getUserTracks(this.props.user)
            console.log(tracks)
            this.setState({ tracks: tracks.tracks })
        } catch (error) {
            console.error(error)
        }
    }

    renderTracks = () => {
        const {
            match: { path },
            history,
        } = this.props

        if (this.state.tracks.length) {
            return this.state.tracks.map((track) => (
                <div key={track.id} className='trackPreview flex-row'
                    onClick={() => history.push(`${path}/track/${track.id}`)}
                >
                    <h2>{track.title}</h2>
                </div>
            ))
        }
    }

    render() {
        return (
            <div className="listing">
                <div className="trackListing flex-row">
                    {this.renderTracks()}
                </div>
            </div>
        )
    }
}
