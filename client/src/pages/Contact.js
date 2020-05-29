import React from 'react';
import '../App.css';

function Contact() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h3>Contact Me</h3>
                <span style={spanStyling}>
                    <a href="mailto: cjpalmerin@gmail.com"><i className="fas fa-envelope-square"></i></a>
                </span>
                <span style={spanStyling}>
                    <a href="https://www.linkedin.com/in/cj-palmerin-86257996/" target="_blank" rel="noopener noreferrer"><i
                        className="fab fa-linkedin"></i></a>
                </span>
                <span style={spanStyling}>
                    <a href="https://github.com/cjpalmerin" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github-square"></i></a>
                </span>
                <span style={spanStyling}>
                    <a href="https://www.instagram.com/cj.palmerin/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram-square"></i></a>
                </span>
            </div>
        </div>
    )
}

const spanStyling = {
    fontSizing: '3em',
    color: 'white'
}

export default Contact;