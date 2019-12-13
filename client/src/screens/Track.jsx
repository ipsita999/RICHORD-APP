import React, { Component } from 'react'
import { getTrackById } from '../services/calls'
// import { Link } from 'react-router-dom'
import '../styles/Track.css'

const sounds = {
    A: require('./sounds/piano-a.wav'),
    B: require('./sounds/piano-b.wav'),
    C: require('./sounds/piano-c.wav'),
    D: require('./sounds/piano-d.wav'),
    E: require('./sounds/piano-e.wav'),
    F: require('./sounds/piano-f.wav'),
    G: require('./sounds/piano-g.wav'),
}

class Track extends Component {

    constructor() {
        super()
        this.state = {
            track: null,
            title: '',
            play: false,
            aColor: 'white',
            bColor: 'white',
            cColor: 'white',
            dColor: 'white',
            eColor: 'white',
            fColor: 'white',
            gColor: 'white',
            hColor: 'white',
            iColor: 'white',
            jColor: 'white',
            kColor: 'white',
            lColor: 'white',
            mColor: 'white',
            nColor: 'white',
            oColor: 'white',
            pColor: 'white',
            qColor: 'white',
            rColor: 'white',
            sColor: 'white',
            tColor: 'white',
            uColor: 'white',
            pause: false,
            stop: false

        }
    }

    audio = new Audio()

    componentDidMount() {
        this.fetchTrack()
    }

    fetchTrack = async () => {
        try {
            const track = await getTrackById(this.props.match.params.id)
            
            this.setState({ track })
            this.setState({title: this.state.track.track.title})
            // console.log(this.state)


            // console.log(this.state.track.track)

        } catch (err) {
            console.error(err)
        }
    }

    playTrack = () => {
        if (this.state.pause === true) {
            this.setState({
                pause: false
            })
        } else if (this.state.stop === true) {
            this.setState({
                stop: false
            })
        }

        this.timer()
    }

    timer = () => {

        if (this.state.play === true) {
            return
        }

        this.start();

        setTimeout(() => {
            clearInterval(this.start);
        })


    }

start = () => {
        this.setState({
            play: true
        })
        const timeline = this.state.track.track;
        let i = 0;
        let myVar = setInterval(() => {
            if (this.state.stop) {
                i = 2001
                this.setState({aColor: 'white',
                bColor: 'white',
                cColor: 'white',
                dColor: 'white',
                eColor: 'white',
                fColor: 'white',
                gColor: 'white',
                hColor: 'white',
                iColor: 'white',
                jColor: 'white',
                kColor: 'white',
                lColor: 'white',
                mColor: 'white',
                nColor: 'white',
                oColor: 'white',
                pColor: 'white',
                qColor: 'white',
                rColor: 'white',
                sColor: 'white',
                tColor: 'white',
                uColor: 'white'
            })
            }
            if (this.state.play === true && this.state.pause === false) {
                if (i > 2000) {
                    clearInterval(myVar)
                    this.setState({
                        play: false
                    })
                    console.log('SONG IS DONE')
                    this.setState({aColor: 'white',
                bColor: 'white',
                cColor: 'white',
                dColor: 'white',
                eColor: 'white',
                fColor: 'white',
                gColor: 'white',
                hColor: 'white',
                iColor: 'white',
                jColor: 'white',
                kColor: 'white',
                lColor: 'white',
                mColor: 'white',
                nColor: 'white',
                oColor: 'white',
                pColor: 'white',
                qColor: 'white',
                rColor: 'white',
                sColor: 'white',
                tColor: 'white',
                uColor: 'white'
            })

                }
                if (timeline[i]) {

                    for (let k = 0; k < timeline[i].length; k++) {
                        console.log('playing sound file at MS:', i)

                        this.playSound(timeline[i][k]);
                        if (i === 0) {
                            if (timeline[i][k] === 'D') {
                                this.setState({aColor: 'red'})
                            } else if (timeline[i][k] === 'A') {
                                this.setState({aColor: 'green'})
                            } else if (timeline[i][k] === 'B') {
                                this.setState({aColor: 'pink'})
                            } else if (timeline[i][k] === 'C') {
                                this.setState({aColor: 'yellow'})
                            } else if (timeline[i][k] === 'E') {
                                this.setState({aColor: 'orange'})
                            } else if (timeline[i][k] === 'F') {
                                this.setState({aColor: 'brown'})
                            } else if (timeline[i][k] === 'G') {
                                this.setState({aColor: 'purple'})
                            } else {this.setState({ aColor: 'blue'}) }
                        } else if (i === 100) {
                            if (timeline[i][k] === 'D') {
                                this.setState({bColor: 'red'})
                            } else if (timeline[i][k] === 'A') {
                                this.setState({bColor: 'green'})
                            } else if (timeline[i][k] === 'B') {
                                this.setState({bColor: 'pink'})
                            } else if (timeline[i][k] === 'C') {
                                this.setState({bColor: 'yellow'})
                            } else if (timeline[i][k] === 'E') {
                                this.setState({bColor: 'orange'})
                            } else if (timeline[i][k] === 'F') {
                                this.setState({bColor: 'brown'})
                            } else if (timeline[i][k] === 'G') {
                                this.setState({bColor: 'purple'})
                            }  else {this.setState({ bColor: 'blue'}) }
                        } else if (i === 200) {
                            if (timeline[i][k] === 'D') {
                                this.setState({cColor: 'red'})
                            } else if (timeline[i][k] === 'A') {
                                this.setState({cColor: 'green'})
                            } else if (timeline[i][k] === 'B') {
                                this.setState({cColor: 'pink'})
                            } else if (timeline[i][k] === 'C') {
                                this.setState({cColor: 'yellow'})
                            } else if (timeline[i][k] === 'E') {
                                this.setState({cColor: 'orange'})
                            } else if (timeline[i][k] === 'F') {
                                this.setState({cColor: 'brown'})
                            } else if (timeline[i][k] === 'G') {
                                this.setState({cColor: 'purple'})
                            }  else {this.setState({ cColor: 'blue'}) }
                        } else if (i === 300) {
                            if (timeline[i][k] === 'D') {
                                this.setState({dColor: 'red'})
                            } else if (timeline[i][k] === 'A') {
                                this.setState({dColor: 'green'})
                            } else if (timeline[i][k] === 'B') {
                                this.setState({dColor: 'pink'})
                            } else if (timeline[i][k] === 'C') {
                                this.setState({dColor: 'yellow'})
                            } else if (timeline[i][k] === 'E') {
                                this.setState({dColor: 'orange'})
                            } else if (timeline[i][k] === 'F') {
                                this.setState({dColor: 'brown'})
                            } else if (timeline[i][k] === 'G') {
                                this.setState({dColor: 'purple'})
                            }  else {this.setState({ dColor: 'blue'}) }
                        } else if (i === 400) {
                            if (timeline[i][k] === 'D') {
                                this.setState({eColor: 'red'})
                            } else if (timeline[i][k] === 'A') {
                                this.setState({eColor: 'green'})
                            } else if (timeline[i][k] === 'B') {
                                this.setState({eColor: 'pink'})
                            } else if (timeline[i][k] === 'C') {
                                this.setState({eColor: 'yellow'})
                            } else if (timeline[i][k] === 'E') {
                                this.setState({eColor: 'orange'})
                            } else if (timeline[i][k] === 'F') {
                                this.setState({eColor: 'brown'})
                            } else if (timeline[i][k] === 'G') {
                                this.setState({eColor: 'purple'})
                            }  else {this.setState({ eColor: 'blue'}) }
                        } else if (i === 500) {
                            if (timeline[i][k] === 'D') {
                                this.setState({fColor: 'red'})
                            } else if (timeline[i][k] === 'A') {
                                this.setState({fColor: 'green'})
                            } else if (timeline[i][k] === 'B') {
                                this.setState({fColor: 'pink'})
                            } else if (timeline[i][k] === 'C') {
                                this.setState({fColor: 'yellow'})
                            } else if (timeline[i][k] === 'E') {
                                this.setState({fColor: 'orange'})
                            } else if (timeline[i][k] === 'F') {
                                this.setState({fColor: 'brown'})
                            } else if (timeline[i][k] === 'G') {
                                this.setState({fColor: 'purple'})
                            }  else {this.setState({ fColor: 'blue'}) }
                        } else if (i === 600) {
                            if (timeline[i][k] === 'D') {
                                this.setState({gColor: 'red'})
                            } else if (timeline[i][k] === 'A') {
                                this.setState({gColor: 'green'})
                            } else if (timeline[i][k] === 'B') {
                                this.setState({gColor: 'pink'})
                            } else if (timeline[i][k] === 'C') {
                                this.setState({gColor: 'yellow'})
                            } else if (timeline[i][k] === 'E') {
                                this.setState({gColor: 'orange'})
                            } else if (timeline[i][k] === 'F') {
                                this.setState({gColor: 'brown'})
                            } else if (timeline[i][k] === 'G') {
                                this.setState({gColor: 'purple'})
                            }  else {this.setState({ gColor: 'blue'}) }
                        } else if (i === 700) {
                            if (timeline[i][k] === 'D') {
                                this.setState({hColor: 'red'})
                            } else if (timeline[i][k] === 'A') {
                                this.setState({hColor: 'green'})
                            } else if (timeline[i][k] === 'B') {
                                this.setState({hColor: 'pink'})
                            } else if (timeline[i][k] === 'C') {
                                this.setState({hColor: 'yellow'})
                            } else if (timeline[i][k] === 'E') {
                                this.setState({hColor: 'orange'})
                            } else if (timeline[i][k] === 'F') {
                                this.setState({hColor: 'brown'})
                            } else if (timeline[i][k] === 'G') {
                                this.setState({hColor: 'purple'})
                            }  else {this.setState({ hColor: 'blue'}) }
                        } else if (i === 800) {
                            if (timeline[i][k] === 'D') {
                                this.setState({iColor: 'red'})
                            } else if (timeline[i][k] === 'A') {
                                this.setState({iColor: 'green'})
                            } else if (timeline[i][k] === 'B') {
                                this.setState({iColor: 'pink'})
                            } else if (timeline[i][k] === 'C') {
                                this.setState({iColor: 'yellow'})
                            } else if (timeline[i][k] === 'E') {
                                this.setState({iColor: 'orange'})
                            } else if (timeline[i][k] === 'F') {
                                this.setState({iColor: 'brown'})
                            } else if (timeline[i][k] === 'G') {
                                this.setState({iColor: 'purple'})
                            }  else {this.setState({ iColor: 'blue'}) }
                        } else if (i === 900) {
                            if (timeline[i][k] === 'D') {
                                this.setState({jColor: 'red'})
                            } else if (timeline[i][k] === 'A') {
                                this.setState({jColor: 'green'})
                            } else if (timeline[i][k] === 'B') {
                                this.setState({jColor: 'pink'})
                            } else if (timeline[i][k] === 'C') {
                                this.setState({jColor: 'yellow'})
                            } else if (timeline[i][k] === 'E') {
                                this.setState({jColor: 'orange'})
                            } else if (timeline[i][k] === 'F') {
                                this.setState({jColor: 'brown'})
                            } else if (timeline[i][k] === 'G') {
                                this.setState({jColor: 'purple'})
                            }  else {this.setState({ jColor: 'blue'}) }
                        } else if (i === 1000) {
                            if (timeline[i][k] === 'D') {
                                this.setState({kColor: 'red'})
                            } else if (timeline[i][k] === 'A') {
                                this.setState({kColor: 'green'})
                            } else if (timeline[i][k] === 'B') {
                                this.setState({kColor: 'pink'})
                            } else if (timeline[i][k] === 'C') {
                                this.setState({kColor: 'yellow'})
                            } else if (timeline[i][k] === 'E') {
                                this.setState({kColor: 'orange'})
                            } else if (timeline[i][k] === 'F') {
                                this.setState({kColor: 'brown'})
                            } else if (timeline[i][k] === 'G') {
                                this.setState({kColor: 'purple'})
                            }  else {this.setState({ kColor: 'blue'}) }
                        } else if (i === 1100) {
                            if (timeline[i][k] === 'D') {
                                this.setState({lColor: 'red'})
                            } else if (timeline[i][k] === 'A') {
                                this.setState({lColor: 'green'})
                            } else if (timeline[i][k] === 'B') {
                                this.setState({lColor: 'pink'})
                            } else if (timeline[i][k] === 'C') {
                                this.setState({lColor: 'yellow'})
                            } else if (timeline[i][k] === 'E') {
                                this.setState({lColor: 'orange'})
                            } else if (timeline[i][k] === 'F') {
                                this.setState({lColor: 'brown'})
                            } else if (timeline[i][k] === 'G') {
                                this.setState({lColor: 'purple'})
                            }  else {this.setState({ lColor: 'blue'}) }
                        } else if (i === 1200) {
                            if (timeline[i][k] === 'D') {
                                this.setState({mColor: 'red'})
                            } else if (timeline[i][k] === 'A') {
                                this.setState({mColor: 'green'})
                            } else if (timeline[i][k] === 'B') {
                                this.setState({mColor: 'pink'})
                            } else if (timeline[i][k] === 'C') {
                                this.setState({mColor: 'yellow'})
                            } else if (timeline[i][k] === 'E') {
                                this.setState({mColor: 'orange'})
                            } else if (timeline[i][k] === 'F') {
                                this.setState({mColor: 'brown'})
                            } else if (timeline[i][k] === 'G') {
                                this.setState({mColor: 'purple'})
                            }  else {this.setState({ mColor: 'blue'}) }
                        } else if (i === 1300) {
                            if (timeline[i][k] === 'D') {
                                this.setState({nColor: 'red'})
                            } else if (timeline[i][k] === 'A') {
                                this.setState({nColor: 'green'})
                            } else if (timeline[i][k] === 'B') {
                                this.setState({nColor: 'pink'})
                            } else if (timeline[i][k] === 'C') {
                                this.setState({nColor: 'yellow'})
                            } else if (timeline[i][k] === 'E') {
                                this.setState({nColor: 'orange'})
                            } else if (timeline[i][k] === 'F') {
                                this.setState({nColor: 'brown'})
                            } else if (timeline[i][k] === 'G') {
                                this.setState({nColor: 'purple'})
                            }  else {this.setState({ nColor: 'blue'}) }
                        } else if (i === 1400) {
                            if (timeline[i][k] === 'D') {
                                this.setState({oColor: 'red'})
                            } else if (timeline[i][k] === 'A') {
                                this.setState({oColor: 'green'})
                            } else if (timeline[i][k] === 'B') {
                                this.setState({oColor: 'pink'})
                            } else if (timeline[i][k] === 'C') {
                                this.setState({oColor: 'yellow'})
                            } else if (timeline[i][k] === 'E') {
                                this.setState({oColor: 'orange'})
                            } else if (timeline[i][k] === 'F') {
                                this.setState({oColor: 'brown'})
                            } else if (timeline[i][k] === 'G') {
                                this.setState({oColor: 'purple'})
                            }  else {this.setState({ oColor: 'blue'}) }
                        } else if (i === 1500) {
                            if (timeline[i][k] === 'D') {
                                this.setState({pColor: 'red'})
                            } else if (timeline[i][k] === 'A') {
                                this.setState({pColor: 'green'})
                            } else if (timeline[i][k] === 'B') {
                                this.setState({pColor: 'pink'})
                            } else if (timeline[i][k] === 'C') {
                                this.setState({pColor: 'yellow'})
                            } else if (timeline[i][k] === 'E') {
                                this.setState({pColor: 'orange'})
                            } else if (timeline[i][k] === 'F') {
                                this.setState({pColor: 'brown'})
                            } else if (timeline[i][k] === 'G') {
                                this.setState({pColor: 'purple'})
                            }  else {this.setState({ pColor: 'blue'}) }
                        } else if (i === 1600) {
                            if (timeline[i][k] === 'D') {
                                this.setState({qColor: 'red'})
                            } else if (timeline[i][k] === 'A') {
                                this.setState({qColor: 'green'})
                            } else if (timeline[i][k] === 'B') {
                                this.setState({qColor: 'pink'})
                            } else if (timeline[i][k] === 'C') {
                                this.setState({qColor: 'yellow'})
                            } else if (timeline[i][k] === 'E') {
                                this.setState({qColor: 'orange'})
                            } else if (timeline[i][k] === 'F') {
                                this.setState({qColor: 'brown'})
                            } else if (timeline[i][k] === 'G') {
                                this.setState({qColor: 'purple'})
                            }  else {this.setState({ qColor: 'blue'}) }
                        } else if (i === 1700) {
                            if (timeline[i][k] === 'D') {
                                this.setState({rColor: 'red'})
                            } else if (timeline[i][k] === 'A') {
                                this.setState({rColor: 'green'})
                            } else if (timeline[i][k] === 'B') {
                                this.setState({rColor: 'pink'})
                            } else if (timeline[i][k] === 'C') {
                                this.setState({rColor: 'yellow'})
                            } else if (timeline[i][k] === 'E') {
                                this.setState({rColor: 'orange'})
                            } else if (timeline[i][k] === 'F') {
                                this.setState({rColor: 'brown'})
                            } else if (timeline[i][k] === 'G') {
                                this.setState({rColor: 'purple'})
                            }  else {this.setState({ rColor: 'blue'}) }
                        } else if (i === 1800) {
                            if (timeline[i][k] === 'D') {
                                this.setState({sColor: 'red'})
                            } else if (timeline[i][k] === 'A') {
                                this.setState({sColor: 'green'})
                            } else if (timeline[i][k] === 'B') {
                                this.setState({sColor: 'pink'})
                            } else if (timeline[i][k] === 'C') {
                                this.setState({sColor: 'yellow'})
                            } else if (timeline[i][k] === 'E') {
                                this.setState({sColor: 'orange'})
                            } else if (timeline[i][k] === 'F') {
                                this.setState({sColor: 'brown'})
                            } else if (timeline[i][k] === 'G') {
                                this.setState({sColor: 'purple'})
                            }  else {this.setState({ sColor: 'blue'}) }
                        } else if (i === 1900) {
                            if (timeline[i][k] === 'D') {
                                this.setState({tColor: 'red'})
                            } else if (timeline[i][k] === 'A') {
                                this.setState({tColor: 'green'})
                            } else if (timeline[i][k] === 'B') {
                                this.setState({tColor: 'pink'})
                            } else if (timeline[i][k] === 'C') {
                                this.setState({tColor: 'yellow'})
                            } else if (timeline[i][k] === 'E') {
                                this.setState({tColor: 'orange'})
                            } else if (timeline[i][k] === 'F') {
                                this.setState({tColor: 'brown'})
                            } else if (timeline[i][k] === 'G') {
                                this.setState({tColor: 'purple'})
                            }  else {this.setState({ tColor: 'blue'}) }
                        } else if (i === 2000) {
                            if (timeline[i][k] === 'D') {
                                this.setState({uColor: 'red'})
                            } else if (timeline[i][k] === 'A') {
                                this.setState({uColor: 'green'})
                            } else if (timeline[i][k] === 'B') {
                                this.setState({uColor: 'pink'})
                            } else if (timeline[i][k] === 'C') {
                                this.setState({uColor: 'yellow'})
                            } else if (timeline[i][k] === 'E') {
                                this.setState({uColor: 'orange'})
                            } else if (timeline[i][k] === 'F') {
                                this.setState({uColor: 'brown'})
                            } else if (timeline[i][k] === 'G') {
                                this.setState({uColor: 'purple'})
                            }  else {this.setState({ uColor: 'blue'}) }
                        } 
                        // togglePlay() {
                        //     this.setState({ 'play': !this.state.play }, () => {
                        //         this.state.play ? globalAudio.play(this.name) : globalAudio.pause(this.name);
                        //     });
                    }
                }
                i = i + 1;
            }
        }, 1);
    }

    playSound = (sound) => {

        let audio = new Audio()
        audio.src = sounds[sound]
        audio.play()


        console.log('playing sound file:', sounds[sound]);
    }






    pauseTrack = () => {
        if (this.state.play) {
            this.setState({
                pause: true
            })
        }
    }

    stopTrack = () => {
        this.setState({
            stop: true,
            pause: false
        })
    }

    render() {
        
        return (
            // this.state.track &&
            <div className="track">

            <div className="sheet">
            <h1>{`${this.state.title}`}</h1>
                <div className="interval">
                    <div className="A key" style={{backgroundColor: `${this.state.aColor}`, backgroundImage: `${this.state.aImage}`}}></div>
                    <div className="B key" style={{backgroundColor: `${this.state.bColor}`, backgroundImage: `${this.state.bImage}`}}></div>
                    <div className="C key" style={{backgroundColor: `${this.state.cColor}`}}></div>
                    <div className="D key" style={{backgroundColor: `${this.state.dColor}`}}></div>
                    <div className="E key" style={{backgroundColor: `${this.state.eColor}`}}></div>
                    <div className="F key" style={{backgroundColor: `${this.state.fColor}`}}></div>
                    <div className="G key" style={{backgroundColor: `${this.state.gColor}`}}></div>
                    <div className="C key" style={{backgroundColor: `${this.state.hColor}`}}></div>
                    <div className="C key" style={{backgroundColor: `${this.state.iColor}`}}></div>
                    <div className="C key" style={{backgroundColor: `${this.state.jColor}`}}></div>
                    <div className="C key" style={{backgroundColor: `${this.state.kColor}`}}></div>
                    <div className="C key" style={{backgroundColor: `${this.state.lColor}`}}></div>
                    <div className="C key" style={{backgroundColor: `${this.state.mColor}`}}></div>
                    <div className="C key" style={{backgroundColor: `${this.state.nColor}`}}></div>
                    <div className="C key" style={{backgroundColor: `${this.state.oColor}`}}></div>
                    <div className="C key" style={{backgroundColor: `${this.state.pColor}`}}></div>
                    <div className="C key" style={{backgroundColor: `${this.state.qColor}`}}></div>
                    <div className="C key" style={{backgroundColor: `${this.state.rColor}`}}></div>
                    <div className="C key" style={{backgroundColor: `${this.state.sColor}`}}></div>
                    <div className="C key" style={{backgroundColor: `${this.state.tColor}`}}></div>
                    <div className="C key" style={{backgroundColor: `${this.state.uColor}`}}></div>
                </div>
            </div>

            <div className="controls">
                <img src={require("../resources/play.png")} onClick={this.playTrack}/>
                <img src={require("../resources/pause.png")} onClick={this.pauseTrack}/>
                <img src={require("../resources/stop.png")} onClick={this.stopTrack}/>
            </div>



            </div>
        )
    }
}
        
        

export default Track