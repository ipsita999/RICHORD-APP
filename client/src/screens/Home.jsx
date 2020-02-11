import React, { Component } from 'react';
import '../styles/Home.css';
import LearnMore from './LearnMore';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            display: 'none',
            title: 'block',
            animate: 'moveDown'
        }
    }


    showLearn = () => {
        console.log('button was clicked')
        if (this.state.animate === 'moveDown') {
            console.log(this.state)
            this.setState({ display: 'block', title: 'none', animate: 'moveUp' });
        } else if (this.state.animate === 'moveUp') {
            this.setState({ display: 'block', title: 'block', animate: 'moveDown' })
            console.log(this.state);
        }
    }


render() {
    return (
        <>
        <div className="home-container flex-col">
            <h1 className ="catchphrase">Find your sound...</h1>
            {/* <a href= "#"> </a>
                <div className="learn" onClick={() => this.showLearn()}>

                <h2>Learn More</h2>    
            </div> */}
            <div className="arrowButton">
                    <img src={require("../resources/icons8-arrow-pointing-down-64.png")}></img>
            </div>
          
            </div>
            <LearnMore/>
           </> 
        )

    }
}


export default Home;