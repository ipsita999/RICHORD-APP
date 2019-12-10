import React from 'react';
import '../styles/Home.css';

function Home() {
    return (
        <div className="home-container">
            <div className="header">
                <h3 className="brand">RICHORD</h3>
                {/* Navbar might go here? */}
                <div className="account">
                    <h3>Sign Up</h3>
                    <h3 className="signIn">Sign In</h3>
                </div>
            </div>
            <h1>Find your sound...</h1>
            <h2>Learn More</h2>
            <div className="learnButton">
                v
            </div>
            <div className="learnBox">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti nemo molestiae eos eligendi fugit quisquam soluta fuga facilis animi, aliquam iusto quis sapiente quod, assumenda odit amet impedit reprehenderit cupiditate.</p>
                <h2>View Tracks</h2>
            </div>
        </div>
    );
}

export default Home;