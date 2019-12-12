import React, {Component} from 'react';
import '../styles/Home.css';
import { NavLink } from 'react-router-dom'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            display: 'block'
        }
    }


showLearn = () => {
    console.log('button was clicked')
        if ( this.state.display === 'none') {
            console.log(this.state)
            this.setState({ display: 'block' });
          } else if ( this.state.display === 'block' ) {
            this.setState({ display: 'none' })
            console.log(this.state);
          }
}

render() {
    return (
        <div className="home-container">
            <h1>Find your sound...</h1>
            <div className="learn" onClick={() => this.showLearn()}>
                <h2>Learn More</h2>
                <div className="learnButton">
                    v
            </div>
            </div>
            <div className="learnBox" style={{display: `${this.state.display}`}}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti nemo molestiae eos eligendi fugit quisquam soluta fuga facilis animi, aliquam iusto quis sapiente quod, assumenda odit amet impedit reprehenderit cupiditate.</p>
                <NavLink to='/tracks' className="link">View Tracks</NavLink>
            </div>
        </div>
    );
}
}


export default Home;