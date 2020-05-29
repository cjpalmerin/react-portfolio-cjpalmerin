import React from 'react'
import '../App.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import logo from '../images/cj-web-icon.png'


export default function Home() {
    return (
        <div className="jumbotron-home jumbotron-fluid">
            <div className="container">
                <img id="logo" alt="CJ Logo" src= {logo} />                
                <Router>
                    <div id="front-menu">
                        <a href= "/aboutme" className="menu-button">About Me</a>
                        <p className="separator"> | </p>
                        <a href="/projects" className="menu-button">Projects</a>
                        <p className="separator"> | </p>
                        <Link to="/resume" className="menu-button">Resume</Link>
                        <p className="separator"> | </p>
                        <Link to="/contact" className="menu-button">Contact</Link>
                    </div>
                </Router>
            </div>
            </div>
    )
}