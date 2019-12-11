import React, { Component } from 'react'
import {getTrackById} from '../services/calls'


 class Track extends Component {
    constructor() {
        super()
        this.state = {
            track: null,
            play: false,
            timeline: {}

        }
    }  
            async componentDidMount() {
               this.fetchTrack()

              }
            
            fetchTrack = async () => {
                try {
                 const track = await getTrackById(1)
                 console.log(track.track)
                 this.setState({ track })
                 
                } catch (err) {
                    console.error(err)
                  }
            }
            
            handleClick() {
                
            }
              
            
            
            playTracks = () => {
                const sounds = {
                        P: 'https://freesound.org/people/Jaz_the_MAN_2/sounds/316913/#',
                        G: 'https://freesound.org/people/Jaz_the_MAN_2/sounds/316913/#',
                        D: 'https://freesound.org/people/Jaz_the_MAN_2/sounds/316913/#'
                      }
                      
                    //   const timeline =  {          
                    //       title: 'track 1',
                    //       0: ["P","G"],
                    //       100: ["D"],
                    //       200: ["G", "D"],
                    //       300: ["P", "G", "D"],
                    //       400: ["G"],
                    //       500: ["G"],
                    //       600: ["P","G"],
                    //       700: ["P","G"],
                    //       900: ["D"]
                    //   }
                    const timeline = this.state.track.track
                      
                      const playSound = (sound) => {
                        let audio = new Audio()
                        audio.src = sounds[sound]
                        audio.play()
            
                        console.log('playing sound file:', sounds[sound]);
                      }
                      
                      let i = 0;
                      
                      function start() {
                       let myVar = setInterval(function(){
                          if (i > 1000) {
                            clearInterval(myVar)
                            console.log('SONG IS DONE')
                            }
                          if (timeline[i]) {
                            for (let k = 0; k < timeline[i].length; k++) {
                              console.log('playing sound file at MS:', i)
                              playSound(timeline[i][k]);
                            }
                          }
                          i = i + 1;
                        }, 1);
                      }
                      const timer = () => {
                        start();
                      }
                      
                      setTimeout(() => {
                        clearInterval(start);
                      }, )
                      
                      
                      
                      timer();
                    }
            
    



    render() {
        return(
            this.state.track && 
                <>
                <h1>hello</h1>
                <button onClick = {this.playTracks}> play </button>
                < audio/>
                </>
        )
    }
}

export default Track

