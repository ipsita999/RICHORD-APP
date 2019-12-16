import React, { Component } from 'react'
import '../styles/Tracks.css'
import { deleteTrack } from '../services/calls'

export default class Tracks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkDelete: false,
            itemToDeleteName: null,
            itemToDeleteId: null,
            tracks: null
        }
    }

    checkNewTrack = async () => {
        const check = await this.props.getTracks()
        if (check && this.state.tracks) {
            if (check.length !== this.state.tracks.length) {
                this.setState({
                    tracks: check
                })
            }
        }
    }

    fetchTracks = async () => {
        const tracks = await this.props.getTracks()
        if (tracks) {
            this.setState({
                tracks: tracks
            })
        }
    }

    componentDidMount = () => {
        this.fetchTracks()
    }

    renderTracks = () => {
        const {
            match: { path },
            history,
        } = this.props

        if (this.state.tracks) {
            return this.state.tracks.map((track) => (
                <div key={track.id} className='trackPreview flex-row' >
                    <h2 onClick={() => history.push(`${path}/track/${track.id}`)}>{track.title}</h2>

                    {this.renderDeleteMenu(track.id, track.title)}


                </div>
            ))
        }
    }

    openDeleteMenu = (event) => {
        console.log(event.target.value)
        this.setState({
            itemToDeleteId: event.target.value,
            checkDelete: true,
        })

    }

    closeDeleteMenu = () => {
        this.setState({
            itemToDeleteId: '',
            checkDelete: false,
        })
    }

    handleDelete = () => {
        console.log(this.state.itemToDeleteId)
        deleteTrack(this.state.itemToDeleteId).then(() => {
            this.setState({
                itemToDeleteId: '',
                checkDelete: false
            })
        }).catch(error => console.error(error))

    }

    renderDeleteMenu = (id, title) => {
        if (this.state.checkDelete === false) {
            return <button className='delete-prompt-button' value={id} onClick={this.openDeleteMenu}>x</button>
        }
        if (this.state.checkDelete) {
            return (
                <div className='delete-menu'>
                    <h3 className='delete-prompt'>Are you sure you would like to delete {title}?</h3>
                    <div className='buttons'>
                        <button className='confirm buttonCheck' onClick={this.handleDelete}>Yes</button>
                        <button className='reject buttonCheck' onClick={this.closeDeleteMenu}>No</button>
                    </div>
                </div>
            )
        } else {
            return
        }
    }

    render() {
        this.checkNewTrack()
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
