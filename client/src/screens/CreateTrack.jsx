import React from 'react';
import { Redirect } from 'react-router-dom'
import { createTrack } from '../services/auth.js'
class CreateTrack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "",
            duration: "-1",
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
            created: false,
            createdTrack: null
        }
    }

    handleKeyChange = (event) => {
        this.setState({ key: event.target.value });
    }

    handleDurationChange = (event) => {
        this.setState({ duration: event.target.value });
    }

    onAddClick = () => {
        let duration = parseInt(this.state.duration);
        if (duration === -1 || this.state.key === "")
            return;

        let localBeats = { ...this.state.beats };
        localBeats[duration].push(this.state.key);

        this.setState({ beats: localBeats }, () => {
            console.log("beats: ", this.state.beats)
        })
    }

    handleSubmit = async () => {
        try {
            const track = await createTrack(this.state.beats)
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
            throw error
        }
    }

    render() {

        if (this.state.created) {
            return <Redirect to={"/tracks"} />
        }

        return (
            <div>

                <div style={{ padding: 10, display: "flex", flexDirection: "row" }} >

                    <p>
                        Interval: <select onChange={this.handleDurationChange}>
                            <option value="none">choose</option>
                            <option value="0">0</option>
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="300">300</option>
                            <option value="400">400</option>
                            <option value="500">500</option>
                            <option value="600">600</option>
                            <option value="700">700</option>
                            <option value="800">800</option>
                            <option value="900">900</option>
                            <option value="1000">1000</option>
                            <option value="1100">1100</option>
                            <option value="1200">1200</option>
                            <option value="1300">1300</option>
                            <option value="1400">1400</option>
                            <option value="1500">1500</option>
                            <option value="1600">1600</option>
                            <option value="1700">1700</option>
                            <option value="1800">1800</option>
                            <option value="1900">1900</option>
                            <option value="2000">2000</option>
                        </select>
                    </p>

                    <div style={{ width: 50 }}></div>
                    <p>
                        Key: <select name="key" onChange={this.handleKeyChange}>
                            <option value="none">choose</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                            <option value="G">G</option>
                        </select>
                    </p>

                    <div style={{ width: 50 }}></div>

                    <button onClick={this.onAddClick}>Add</button>



                </div>
                <div style={{ margin: 10, display: "flex", flexDirection: "row" }}>


                    {Object.keys(this.state.beats).map((item) => {
                        return (
                            <div style={{ margin: 5, display: "flex", flexDirection: "column" }}>
                                <div>{item}</div>
                                {this.state.beats[item].map((key, index) => {
                                    return (
                                        <div key={index}>{key}</div>
                                    )
                                })}
                            </div>
                        );
                    })}
                </div>
                <button onClick={this.handleSubmit}> Create Track</button>

            </div>
        );
    }
}

export default CreateTrack;