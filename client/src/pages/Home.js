import React from 'react'
import '../App.css'
import { BrowserRouter as Router } from 'react-router-dom'
// const logo = '../assets/images/cj-web-icon.png'


export default function Home() {
    return (
        <div className="jumbotron-home jumbotron-fluid">
            <div className="container">
                <img id="logo" alt="CJ Logo" src="../assets/images/cj-web-icon.png" />                
                <Router>
                    {/* <div id="front-menu"> */}
                        {/* <Link to ='/aboutme'> */}
                        {/* <a href= "/aboutme" className="menu-button">About Me</a> */}
                        {/* <p className="menu-button">About Me</p> */}
                        {/* </Link> */}
                        {/* <p className="separator"> | </p> */}
                        {/* <a href="/projects" className="menu-button">Projects</a> */}
                        {/* <p className="separator"> | </p> */}
                        {/* <Link to="/resume" className="menu-button">Resume</Link> */}
                        {/* <p className="separator"> | </p> */}
                        {/* <Link to="/contact" className="menu-button">Contact</Link> */}
                    {/* </div> */}
                </Router>
            </div>
            </div>
    )
}