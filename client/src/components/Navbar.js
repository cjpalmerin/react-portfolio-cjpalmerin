import React from 'react';
import '../App.css';
// const logo = '../assets/images/cj-web-icon.png'


export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/"><img id="header-logo" alt="CJ logo" src= "../assets/images/cj-web-icon.png" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    <span style={spanStyle}>
                            <i className="fas fa-bars"></i>
                        </span>
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/aboutme">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/resume">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact Me</a>
                        </li>
                    </ul>
                </div>
  </nav>
    )
}


const spanStyle = {
    fontSize: '20px',
    color: 'white'
    
}