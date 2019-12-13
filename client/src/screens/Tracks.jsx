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
                <h1>All Tracks
                    </h1>
                <div className="trackListing flex-row">
                    {this.renderTracks()}
                </div>
            </div>
        )
    }
}
