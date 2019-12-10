import React from 'react'
import { api } from '../services/ApiConfig'

export default class Tracks extends React.Component {
    constructor() {
        super()
        this.state = {
            tracks: [],
        }
    }

    componentDidMount() {
        this.fetchTracks()
    }

    fetchTracks = async () => {
        try {
            const tracks = await api.get('/tracks')
            console.log(tracks)
            this.ListeningStateChangedEvent({ tracks: tracks.data })
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
                <div key={track.id} className='trackPreview' onClick={() => history.push(`${path}/track/${track.id}`)} >
                    <h2>{track.title}</h2>
                    <img className='previewPic' src="" />
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
