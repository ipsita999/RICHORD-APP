import React from 'react';
import { Redirect } from 'react-router-dom'
import { createTrack } from '../services/auth.js'
import $ from 'jquery'
import '../styles/EditTrack.css'
import { getTrackById } from '../services/calls'

class EditTrack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "",
            selectedInterval: '0',
            beats: {
                0: [],
                100: [],
                200: [],
                300: [],
                400: [],
                500: [],
                600: [],
                700: [],
                800: [],
                900: [],
                1000: [],
                1100: [],
                1200: [],
                1300: [],
                1400: [],
                1500: [],
                1600: [],
                1700: [],
                1800: [],
                1900: [],
                2000: []
            },
            user_id: this.props.user.id,
            title: 'Untitled Track',
            indexCheck: 0,
            created: false,
            createdTrack: null
        }
    }

    async componentDidMount() {
        this.fetchTrack()

    }

    fetchTrack = async () => {
        try {
            const track = await getTrackById(this.props.match.params.id)
            console.log(this.state.beats)
            console.log(track)
            console.log(track.track)
            console.log(track.track[0])
            this.setState({ beats: track.track })

        } catch (err) {
            console.error(err)
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const track = await createTrack({
                ...this.state.beats,
                title: this.state.title,
                user_id: this.state.user_id
            })
            if (track) {
                this.setState({
                    createdTrack: track
                })
                this.props.addTrack(this.state.createdTrack)
                this.setState({
                    created: true,
                    createdTrack: null
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = event => {
        this.setState({
            title: `${ event.target.value }`
        })
    }

    handleIntervalSelect = event => {
        $("div.interval-button-container").find("button").removeClass('selected')
        event.target.className = 'selected interval-button'
        this.setState({
            selectedInterval: event.target.value,
            indexCheck: event.target.key
        })
    }

    onClickAdd = (event) => {
        let interval = parseInt(this.state.selectedInterval)
        let localBeats = { ...this.state.beats }
        if (localBeats[interval].length < 5) {
            localBeats[interval].push(event.target.value)
        } else { 
            return
        }
        this.setState({ beats: localBeats }, () => {
            console.log("beats: ", this.state.beats)
        })
    }

    onClickClear = (event) => {
        let interval = parseInt(this.state.selectedInterval)
        let localBeats = { ...this.state.beats }
        if (localBeats[interval].length > 0) {
            localBeats[interval] = [];
        } else { 
            return
        }
        this.setState({ beats: localBeats }, () => {
            console.log("beats: ", this.state.beats)
        })
    }

    renderButtons = () => {
        return (
            Object.keys(this.state.beats).map((item, index) => {
                return (
                    <div key={ index } className='interval-button-container flex-col' style={{ margin: 5 }}>
                        <button onClick={ this.handleIntervalSelect } className='interval-button' value={`${ item }`}>{item}</button>
                        {this.state.beats[item].map((key, index) => {
                            return (
                                <div className='added-key' key={ index }>{ key }</div>
                            )
                        })}
                    </div>
                )
            })
        )
    }

    render() {

        if (this.state.created) {
            return <Redirect to={"/tracks"} />
        }

        return (
            <>
                <p className='create-track-text first'>Selected Interval: {this.state.selectedInterval} </p>
                <div className='intervals-container flex-row' >

                        { this.renderButtons() }

                </div>
                <div className='keys-container flex-row'>
                    <p className='create-track-text'>Keys:</p>
                    <div className='keys flex-row'>
                        <button className='key-button' onClick={ this.onClickAdd } value="A">A</button>
                        <button className='key-button' onClick={ this.onClickAdd } value="B">B</button>
                        <button className='key-button' onClick={ this.onClickAdd } value="C">C</button>
                        <button className='key-button' onClick={ this.onClickAdd } value="D">D</button>
                        <button className='key-button' onClick={ this.onClickAdd } value="E">E</button>
                        <button className='key-button' onClick={ this.onClickAdd } value="F">F</button>
                        <button className='key-button' onClick={ this.onClickAdd } value="G">G</button>
                        <button className='key-button clear' onClick={ this.onClickClear } >Clear</button>
                    </div>
                </div>
                <form className='create-track-form flex-row' onSubmit={ this.handleSubmit }>
                    <input
                        required
                        type="text"
                        value={ this.state.title }
                        placeholder="Enter Track Title"
                        onChange={ this.handleChange }
                        className='title-input'
                    />
                    <button className='create-button' type='submit'>Create Track</button>
                </form>
            </>
        )
    }
}

export default EditTrack