import React from 'react';
import { Redirect } from 'react-router-dom'
import { createTrack } from '../services/auth.js'
class CreateTrack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "",
            selectedBeat: '0',
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
            created: false,
            createdTrack: null
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
            title: `${event.target.value}`
        })
    }

    handleBeatSelect = event => {
        this.setState({
            selectedBeat: event.target.value
        })
    }

    onClickAdd = (event) => {
        let beat = parseInt(this.state.selectedBeat)
        console.log(event.target.value)
        let localBeats = { ...this.state.beats }
        localBeats[beat].push(event.target.value)

        this.setState({ beats: localBeats }, () => {
            console.log("beats: ", this.state.beats)
        })
    }

    render() {

        if (this.state.created) {
            return <Redirect to={"/tracks"} />
        }

        return (
            <div>
                <p>Selected Interval: {this.state.selectedBeat}</p>
                <div style={{ padding: 10, display: "flex", flexDirection: "row" }} >
                    <p>
                        Interval:
                            <button onClick={this.handleBeatSelect} value="0">0</button>
                            <button onClick={this.handleBeatSelect} value="100">100</button>
                            <button onClick={this.handleBeatSelect} value="200">200</button>
                            <button onClick={this.handleBeatSelect} value="300">300</button>
                            <button onClick={this.handleBeatSelect} value="400">400</button>
                            <button onClick={this.handleBeatSelect} value="500">500</button>
                            <button onClick={this.handleBeatSelect} value="600">600</button>
                            <button onClick={this.handleBeatSelect} value="700">700</button>
                            <button onClick={this.handleBeatSelect} value="800">800</button>
                            <button onClick={this.handleBeatSelect} value="900">900</button>
                            <button onClick={this.handleBeatSelect} value="1000">1000</button>
                            <button onClick={this.handleBeatSelect} value="1100">1100</button>
                            <button onClick={this.handleBeatSelect} value="1200">1200</button>
                            <button onClick={this.handleBeatSelect} value="1300">1300</button>
                            <button onClick={this.handleBeatSelect} value="1400">1400</button>
                            <button onClick={this.handleBeatSelect} value="1500">1500</button>
                            <button onClick={this.handleBeatSelect} value="1600">1600</button>
                            <button onClick={this.handleBeatSelect} value="1700">1700</button>
                            <button onClick={this.handleBeatSelect} value="1800">1800</button>
                            <button onClick={this.handleBeatSelect} value="1900">1900</button>
                            <button onClick={this.handleBeatSelect} value="2000">2000</button>
                    </p>
                    <div style={{ width: 50 }}></div>
                </div>
                <p>
                    Key:
                        <button onClick={this.onClickAdd} value="A">A</button>
                        <button onClick={this.onClickAdd} value="B">B</button>
                        <button onClick={this.onClickAdd} value="C">C</button>
                        <button onClick={this.onClickAdd} value="D">D</button>
                        <button onClick={this.onClickAdd} value="E">E</button>
                        <button onClick={this.onClickAdd} value="F">F</button>
                        <button onClick={this.onClickAdd} value="G">G</button>
                </p>

                <div style={{ width: 50 }}></div>
                <div style={{ margin: 10, display: "flex", flexDirection: "row" }}>

                    {Object.keys(this.state.beats).map((item, index) => {
                        return (
                            <div key={index} style={{ margin: 5, display: "flex", flexDirection: "column" }}>
                                <div>{item}</div>
                                {this.state.beats[item].map((key, index) => {
                                    return (
                                        <div key={index}>{key}</div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        required
                        type="text"
                        value={this.state.title}
                        placeholder="Enter Track Title"
                        onChange={this.handleChange}
                    />
                    <button type='submit'>Create Track</button>
                </form>
            </div>
        )
    }
}

export default CreateTrack