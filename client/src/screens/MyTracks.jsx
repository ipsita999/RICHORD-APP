import React, { Component } from 'react'
import { getUserTracks } from '../services/auth'
// import { deleteTrack } from '../services/calls'
import { deleteTrack } from '../services/auth'
import '../styles/Tracks.css'

export default class MyTracks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // tracks: []
            checkDelete: false,
            itemToDeleteName: null,
            itemToDeleteId: null,
            tracks: null,
            selectedtrackIndex: -1
        }
    }

    componentDidMount() {
        this.fetchUserTracks()

    }

    

    checkNewTrack = async () => {
        console.log("running")
        const check = await getUserTracks(this.props.user).tracks
        if (check && this.state.tracks) {
            if (check.length !== this.state.tracks.length) {
                this.setState({
                    tracks: check
                })
            }
        }
    }

    // fetchUserTracks = async () => {
    //     try {
    //         const tracks = await this.props.getUserTracks()
    //         console.log(tracks)
    //         this.setState({ tracks: tracks.tracks })
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    fetchUserTracks = async () => {
        try {
            const tracks = await getUserTracks(this.props.user)
            console.log(tracks)
            this.setState({ tracks: tracks.tracks })
        } catch (error) {
            console.error(error)
        }
    }

    // renderTracks = () => {
    //     const {
    //         match: { path },
    //         history,
    //     } = this.props

    //     if (this.state.tracks.length) {
    //         return this.state.tracks.map((track) => (
    //             <div key={track.id} className='trackPreview flex-row'
    //                 onClick={() => history.push(`${path}/track/${track.id}`)}
    //             >
    //                 <h2>{track.title}</h2>
    //             </div>
    //         ))
    //     }
    // }


    renderTracks = () => {
        const {
            match: { path },
            history,
        } = this.props

        if (this.state.tracks && this.state.tracks[0]) {
            (console.log(this.state.tracks[0]))
            return this.state.tracks.map((track, i) => (
                <div key={track.id} className='trackPreview flex-row'  >
                    <h2 onClick={() => {
                        history.push(`${path}/track/${track.id}`)


                    }}>{track.title}</h2>

                    {this.renderDeleteMenu(track.id, track.title, i)}


                </div>
            ))
        }
    }


    openDeleteMenu = (event,i) => {
        console.log(event.target.value)
        this.setState({
            selectedtrackIndex:i,
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

        deleteTrack(this.state.itemToDeleteId)
        // .then(this.fetchUserTracks())
        .then(() => {
            this.setState({
                itemToDeleteId: '',
                checkDelete: false
            })
            
        }
        
        )
       
        .catch(error => console.error(error))

        

    }



    renderDeleteMenu = (id, title, index) => {
        if (this.state.checkDelete === false) {
            return <button className='delete-prompt-button' value={id} onClick={(e) => {
                 this.openDeleteMenu(e,index) 
            }

            }>x</button>
        }
        
        if (this.state.checkDelete && this.state.selectedtrackIndex == index) {
            return (

                <div className='delete-menu'>
                    <h3 className='delete-prompt'>Are you sure you would like to delete {title}?</h3>
                    <div className='buttons'>
                        <button className='confirm buttonCheck' onClick={this.handleDelete}>Yes</button>
                        <button className='reject buttonCheck' onClick={this.closeDeleteMenu}>No</button>
                    </div>
                </div>

            );
        } else {
            return <button className='delete-prompt-button' value={id} onClick={this.openDeleteMenu}>x</button>;
        }
    }


    render() {
        // this.checkNewTrack()
        this.fetchUserTracks()
        return (
            <div className="listing">
                <div className="trackListing flex-row">
                    {this.renderTracks()}
                </div>
            </div>
        )
    }
}
