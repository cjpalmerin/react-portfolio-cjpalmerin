import React from 'react';
import '../App.css';

export default function Projects() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">

          <a href="weatherEats.html">
            <h3>Project One: weatherEats</h3>
          </a>
          <p>First project completed at Northwestern Coding Bootcamp. Utilizing two APIs, Open Weather and the Meal DB my
          team and I created an app that provides food suggestions based on the weather. I was in charge of front-end
              and made contributions to JavaScript.</p>
          <a href="/weathereats">
            <p>Check out weatherEats here <i className="fas fa-chevron-circle-right"></i></p>
          </a>
          <br />
          <br />
          <h3>Project Two: LocalSpot</h3>
          <p>Second project completed at Northwestern Coding Bootcamp. Utilizing node.js, express.js, express-handlebars,
          materalize, mysql2, and sequelize along Yelp-Fusion API, my team created a curated list of places to go in
          Chicago. Users can view the list and add a like to whichever spots they like or want to hit up. I was in
              charge of designing the front end and contributed to back end routing and JavaScript.</p>
          <a href="/localspot">
            <p>Check out LocalSpot here <i className="fas fa-chevron-circle-right"></i></p>
          </a>
          <br />
          <br />
          <h3>Third-Party APIs Assignment: Work Day Scheduler</h3>
          <p>This application displays the current date and time inside of the jumbotron. From there you can see what time
          of day it is based on the coloring of the different rows in the application. Grey rows will show when that
          time of day has already passed, a red row will show you the current hour slot, and green rows will show the
          future. Users can input their own data into the rows and, through local storage, can see their inputs even
          after leaving or refreshing the page.
              <br />
            <span style={spanStyling}>
              <a href="https://cjpalmerin.github.io/Homework-5/" target="_blank" rel="noopener noreferrer"> <i className="fas fa-link"></i></a>
            </span>
            <span style={spanStyling}>
              <a href="https://github.com/cjpalmerin/Homework-5" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github-square"></i></a>
            </span>
            <br />
          </p>
          <br />
          <br />
          <h3>Express & MySQL: Eat-Da-Burger</h3>
          <p>Save and devour your own burger ideas with Eat-Da-Burger. This app was created using node.js, express.js, express-handlebars, and mySQL.
              <br />
            <span style={spanStyling}>
              <a href="https://eat-da-burger-cjpalmerin.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <i className="fas fa-link"></i></a>
            </span>
            <span style={spanStyling}>
              <a href="https://github.com/cjpalmerin/Eat-Da-Burger" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github-square"></i></a>
            </span>
            <br />
            <br />
          </p>
          <h3>Budget Tracker PWA</h3>
          <p> Using a service worker, indexedDB, and a webmanifest, this app is entirely functional both on and offline! Check it out in the links below:
              <br />
            <span style={spanStyling}>
              <a href="https://budget-tracker-pwa-cjpalmerin.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <i className="fas fa-link"></i></a>
            </span>
            <span style={spanStyling}>
              <a href="https://github.com/cjpalmerin/budget-tracker-pwa" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github-square"></i></a>
            </span>
            <br />
          </p>
          <br />
          <br />
          <h3>MongoDB Fitness Tracker</h3>
          <p> Keeping track of your physical health is incredibly important, and with this MongoDB Fitness Tracker, you'll be able to do just that! Add all the exercises you've been doing and check out all the hard work you've put in on the dashboard!
              <br />
            <span style={spanStyling}>
              <a href="https://mongodb-fitness-tracker-cjpalm.herokuapp.com/?id=5ec001cb8ff40d0017cb66d0" target="_blank" rel="noopener noreferrer"> <i className="fas fa-link"></i></a>
            </span>
            <span style={spanStyling}>
            <a href="https://github.com/cjpalmerin/mongodb-fitness-tracker" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github-square"></i></a>
            </span>
            <br />
          </p>
          <br />
          <br />


          <div className="project-div">
            <h6>Northwestern Bootcamp Project One</h6>
            <img src="../assets/images/weatherEats/weatherEats-06.png" className="project-img" />
            <p className="projects-p">First project completed at Northwestern Coding Bootcamp. Utilizing two APIs, Open Weather and the Meal DB my
            team and I created an app that provides food suggestions based on the weather. I was in charge of front-end
              and made contributions to JavaScript.</p>
            <span style={spanStyling}>
              <a href="https://cbruder1292.github.io/Project1/" target="_blank" rel="noopener noreferrer"> <i className="fas fa-link"></i></a>
            </span>
            <span style={spanStyling}>
              <a href="https://github.com/cbruder1292/Project1" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github-square"></i></a>
            </span>
          </div>

          <div className="project-div">
            <h6>Northwestern Bootcamp Project Two</h6>
            <img src="../assets/images/localspot/localspot-05.png" className="project-img" />
            <p className="projects-p">Utilizing node.js, express.js, express-handlebars,
          materalize, mysql2, and sequelize along Yelp-Fusion API, my team created a curated list of places to go in
          Chicago. Users can view the list and add a like to whichever spots they like or want to hit up. I was in
              charge of designing the front end and contributed to back end routing and JavaScript.</p>
            <span style={spanStyling}>
              <a href="https://agile-journey-25400.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <i className="fas fa-link"></i></a>
            </span>
            <span style={spanStyling}>
              <a href="https://github.com/blapete/project-2" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github-square"></i></a>
            </span>
          </div>


        </div>
      </div>
    </div>
  )
}

const spanStyling = {
  fontSizing: '3em',
  color: 'white'
}
