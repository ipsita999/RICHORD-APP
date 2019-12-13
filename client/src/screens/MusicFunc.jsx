import React, {Component} from 'react'


export default  Musicfunc = () => {

        const sounds = {
                P: 'beat1.wav',
                G: 'beat2.wav',
                D: 'beat3.wav'
              }
              
              const timeline = {
                
              }
              
              const playSound = (sound) => {
                let audio = new Audio()
                audio.src = sounds[sound]
                audio.play()
    
                console.log('playing sound file:', sounds[sound]);
              }
              
              let i = 0;
              
              function start() {
                myVar = setInterval(function(){
                  if (i > 1000) {
                    clearInterval(myVar)
                    console.log('SONG IS DONE')
                    }
                  const currentMSSoundArray = timeline[i];
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


