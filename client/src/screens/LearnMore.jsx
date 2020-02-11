import React, {Component} from 'react';
import '../styles/LearnMore.css'


class LearnMore extends Component {
    constructor() {
        super()
        this.state = {
          
        }
    }



    render() {
        return (
          <div className = "learn-container">
              <div className= "blurb">Richord allows you to create new tracks and learn about music in an easy and fun way!</div>
            <div className = "title"> Quick Three Steps</div>
            <div className = "steps">
                <div className = "step1">
                    <div className = "head"> STEP 1</div>
                    <img className = "step-pic" src = {require("../resources/login.png")}/>
                    <div className = "pitch"> Register</div>
                    </div>
                <div className = "step2"> 
                <div className = "head"> STEP 2</div>
                <img className = "step-pic" src = {require("../resources/musical-note.png")}/>
                <div className = "pitch"> Create a track</div>
                </div>
                <div className = "step3"> 
                <div className = "head"> STEP 3</div>
                <img className = "step-pic" src = {require("../resources/play-button.png")}/>
                <div className = "pitch"> Play!</div>
                </div>
            </div>
            
            </div>


        )
    }
    

}

export default LearnMore