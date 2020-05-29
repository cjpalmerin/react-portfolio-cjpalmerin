import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home';
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import WeatherEats from './pages/WeatherEats';
import LocalSpot from './pages/LocalSpot';


function App() {
  return (
    <Router>
      <Route exact path="/" render={props => (
        <React.Fragment>
          <Home />
        </React.Fragment>
      )} />
      <Route exact path="/aboutme" render={props => (
        <React.Fragment>
          <Navbar />
          <AboutMe />
          <Footer />
        </React.Fragment>
      )} />
      <Route exact path="/projects" render={props => (
        <React.Fragment>
          <Navbar />
          <Projects />
          <Footer />
        </React.Fragment>
      )} />
      <Route exact path="/weathereats" render={props => (
        <React.Fragment>
          <Navbar />
          <WeatherEats />
          <Footer />
        </React.Fragment>
      )} />
      <Route exact path="/localspot" render={props => (
        <React.Fragment>
          <Navbar />
          <LocalSpot />
          <Footer />
        </React.Fragment>
      )} />
      <Route exact path="/resume" render={props => (
        <React.Fragment>
          <Navbar />
          <Resume />
          <Footer />
        </React.Fragment>
      )} />
      <Route exact path="/contact" render={props => (
        <React.Fragment>
          <Navbar />
          <Contact />
          <Footer />
        </React.Fragment>
      )} />
    </Router>
  );
}

export default App;
