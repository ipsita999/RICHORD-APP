import React from 'react';
import '../styles/Home.css';
import { NavLink } from 'react-router-dom'

function Home() {
    return (
        <div className="home-container">
            <h1>Find your sound...</h1>
            <h2>Learn More</h2>
            <div className="learnButton">
                v
            </div>
            <div className="learnBox">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti nemo molestiae eos eligendi fugit quisquam soluta fuga facilis animi, aliquam iusto quis sapiente quod, assumenda odit amet impedit reprehenderit cupiditate.</p>
                <NavLink to='/tracks'>View Tracks</NavLink>
                {/* remove NavLink later */}
            </div>
        </div>
    );
}

export default Home;