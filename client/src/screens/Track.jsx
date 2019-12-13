import React, { Component } from 'react'
import { getTrackById } from '../services/calls'

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
            play: false,
            pause: false,
            stop: false
        }
    }


    componentDidMount() {
        this.fetchTrack()

    }

    fetchTrack = async () => {
        try {
            const track = await getTrackById(this.props.match.params.id)
            
            this.setState({ track })
            console.log(this.state.track.track)
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
            }
            if (this.state.play === true && this.state.pause === false) {
                if (i > 2000) {
                    clearInterval(myVar)
                    this.setState({
                        play: false
                    })
                    console.log('SONG IS DONE')
                }
                if (timeline[i]) {

                    for (let k = 0; k < timeline[i].length; k++) {
                        console.log('playing sound file at MS:', i)

                        this.playSound(timeline[i][k]);
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

    renderTrack = () => {
    
        // if(this.state.track){
        // return ( 
        //     Object.keys(this.state.track.track).map((item, index) => {
        //         if(parseInt(item)){
        //         return (
        //             <div key={ index } className='interval-container flex-col'>
        //                 <div className='interval'>{item}</div>
        //                 if(this.state.track.track[item].length) {
        //                     this.state.track.track[item].map((key, index) => {
        //                     return (
        //                         <div className='track-key' key={ index }>{ key }</div>
        //                     )
        //                 })}
        //             </div>
        //         )}
        //     })
        // )
        // }
    }

    render() {
        
        return (
            // this.state.track &&
            <>
                <h1>hello</h1>
                <button onClick={this.playTrack}> play </button>
                <button onClick={this.pauseTrack}> pause </button>
                <button onClick={this.stopTrack}> stop </button>
        <div>{this.renderTrack()}</div>
            </>
        )
    }
}

export default Track


// constructor() {
//     super()
//     this.state = {
//         track: null,
//         play: false,
//         i: 0
//     }
// }


// async componentDidMount() {
//     this.fetchTrack()

// }

// fetchTrack = async () => {
//     try {
//         const track = await getTrackById(this.props.match.params.id)
//         console.log(track.track)
//         this.setState({ track })

//     } catch (err) {
//         console.error(err)
//     }
// }

// playTrack = () => {
//     if (this.state.play === true) {
//         return
//     }
//     this.setState({
//         play: true
//     })
//     this.start();

//     setTimeout(() => {
//         clearInterval(this.start());
//     })
// }

// start = () => setInterval(() => {
//         if (this.state.play === true) {
//             if (this.state.i > 2000) {
//                 clearInterval(this.start)
//                 this.setState({
//                     play: false,
//                     i: 0
//                 })
//                 console.log('SONG IS DONE')
//             }
//             if (this.state.track.track[this.state.i]) {

//                 for (let k = 0; k < this.state.track.track[this.state.i].length; k++) {
//                     console.log('playing sound file at MS:', this.state.i)

//                     this.playSound(this.state.track.track[this.state.i][k]);
//                     // togglePlay() {
//                     //     this.setState({ 'play': !this.state.play }, () => {
//                     //         this.state.play ? globalAudio.play(this.name) : globalAudio.pause(this.name);
//                     //     });
//                 }
//             }
//             this.setState(prevState => ({
//                 i: prevState.i + 1
//             }))
//         }
//     }, 1);


// playSound = (sound) => {

//     let audio = new Audio()
//     audio.src = sounds[sound]
//     audio.play()

//     console.log('playing sound file:', sounds[sound]);
// }


// pauseTrack = () => {
//     if (this.state.play) {
//         this.setState({
//             play: false
//         })
//     } else {
//         this.setState({
//             play: true
//         })
//     }

// }

// stopTrack = () => {
//     console.log('trying to stop state')
//     this.setState({
//         play: false
//     })
//     setTimeout(() => {
//         clearInterval(this.start());
//     })
// }

// render() {
//     return (
//         // this.state.track &&
//         <>
//             <h1>hello</h1>
//             <button onClick={this.playTrack}> play </button>
//             <button onClick={this.pauseTrack}> pause </button>
//             <button onClick={this.stopTrack}> stop </button>
//         </>
//     )
// }
// }

// export default Track