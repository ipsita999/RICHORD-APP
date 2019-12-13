import React, { Component } from 'react'
import '../styles/Tracks.css'

export default class Tracks extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    // checkNewTrack = async () => {
    //     const check = await getTracks()
    //     if (check.tracks !== this.state.tracks) {
    //         this.setState({
    //             tracks: check.tracks
    //         })
    //     }
    // }

    renderTracks = () => {
        const {
            match: { path },
            history,
        } = this.props
        // console.log(path)

        if (this.props.tracks) {
            return this.props.tracks.map((track) => (
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
                <h1>All Tracks
                    </h1>
                <div className="trackListing">
                    {this.renderTracks()}
                </div>
            </div>
        )
    }
}
