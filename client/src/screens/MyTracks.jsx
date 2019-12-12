import React, { Component } from 'react'
import { getUserTracks } from '../services/auth'

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
            console.log(tracks.tracks)
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
        // console.log(path)

        if (this.state.tracks) {
         
            return this.state.tracks.map((track) => (
                <div key={track.id} className='trackPreview' 
                onClick={() => history.push(`${path}/track/${track.id}`)}
                 >
                    <h2>{track.title}</h2>

                    <img className='previewPic' src={require("../resources/music-placeholder.png")} alt='music-icon' />

                </div>
            ))
        }
    }

    render() {
        return (
            <div className="listing">
                <div className="trackListing">
                    {this.renderTracks()}
                </div>
            </div>
        )
    }
}
