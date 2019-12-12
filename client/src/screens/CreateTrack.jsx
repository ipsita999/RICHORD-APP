class Music extends React.Component {
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


            }

            ,
        }
    }

    togglePlay() {
        this.setState({ 'play': !this.state.play }, () => {
            this.state.play ? globalAudio.play(this.name) : globalAudio.pause(this.name);
        });
    }

    handleKeyChange = (event) => {
        this.setState({ key: event.target.value });
    }

    handleDurationChange = (event) => {
        this.setState({ duration: event.target.value });
    }

    onAddClick = () => {
        let duration = parseInt(this.state.duration);
        if (duration == -1 || this.state.key === "")
            return;

        let localBeats = { ...this.state.beats };
        localBeats[duration].push(this.state.key);

        this.setState({ beats: localBeats }, () => {
            console.log("beats: ", this.state.beats)
        })

    }

    componentWillUnmount() {
        globalAudio.pause(this.name);
    }

    render() {
        return (
            <div>


                <div style={{ padding: 10, display: "flex", flexDirection: "row" }} >
                    <select onChange={this.handleKeyChange}>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                    </select>

                    <div style={{ width: 50 }}></div>

                    <select onChange={this.handleDurationChange}>
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
                    </select>

                    <div style={{ width: 50 }}></div>

                    <button onClick={this.onAddClick}>Add</button>



                </div>
                <div style={{ margin: 10, display: "flex", flexDirection: "row" }}>


                    {Object.keys(this.state.beats).map((item) => {
                        return (
                            <div style={{ margin: 5, display: "flex", flexDirection: "column" }}>
                                <div>{item}</div>
                                {this.state.beats[item].map(key => {
                                    return (
                                        <div>
                                            {key}
                                        </div>
                                    )
                                })}
                            </div>

                        );
                    })}
                </div>

            </div>
        );
    }
}

export default Music;