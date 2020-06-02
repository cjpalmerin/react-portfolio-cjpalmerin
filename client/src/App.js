import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home';
import AboutMe from './pages/AboutMe'
import Resume from './pages/Resume';
import ProjectsV2 from './pages/ProjectsV2'


function App() {
  return (

    <Router>
      <div>
        <Route exact path="/">
          {/* <Navbar /> */}
          <Home />
          <AboutMe />
          <ProjectsV2 />
          <Resume />
          {/* <Contact /> */}
          <Footer />
        </Route>
        <Route exact path="/aboutme">
          <Navbar />
          <AboutMe />
          <Footer />
        </Route>

      </div>
    </Router>


    // <Router>
    //   <Route exact path="/" render={props => (
    //     <React.Fragment>
    //       <Home />
    //     </React.Fragment>
    //   )} />
    //   <Route exact path="/aboutme" render={props => (
    //     <React.Fragment>
    //       <Navbar />
    //       <AboutMe />
    //       <Footer />
    //     </React.Fragment>
    //   )} />
    //   <Route exact path="/projects" render={props => (
    //     <React.Fragment>
    //       <Navbar />
    //       <Projects />
    //       <Footer />
    //     </React.Fragment>
    //   )} />
    //   <Route exact path="/weathereats" render={props => (
    //     <React.Fragment>
    //       <Navbar />
    //       <WeatherEats />
    //       <Footer />
    //     </React.Fragment>
    //   )} />
    //   <Route exact path="/localspot" render={props => (
    //     <React.Fragment>
    //       <Navbar />
    //       <LocalSpot />
    //       <Footer />
    //     </React.Fragment>
    //   )} />
    //   <Route exact path="/resume" render={props => (
    //     <React.Fragment>
    //       <Navbar />
    //       <Resume />
    //       <Footer />
    //     </React.Fragment>
    //   )} />
    //   <Route exact path="/contact" render={props => (
    //     <React.Fragment>
    //       <Navbar />
    //       <Contact />
    //       <Footer />
    //     </React.Fragment>
    //   )} />
    // </Router>
  );
}

export default App;
