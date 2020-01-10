import React from 'react';
import '../css/Pages.css';
import 'react-animated-slider/build/horizontal.css';
import alterra from '../images/alterra.png';
import speakly from '../images/speakly.ico';
import lahacks from '../images/lahacks.jpeg';
import acm from '../images/acmai.png';
import artage from '../images/artage.png';
import cloud from '../images/cloud.png'

export class Portfolio extends React.Component {
  state = {}
  render() {
    return (
      <div className="portfolio-section"  id = "portfolio">
        <div className="portfolio-banner">
          <blockquote className="portfolio">
            <h1>Portfolio</h1>
          </blockquote>
          <div className="description">
            <span>Sometimes I like to make things, occasionally they actually end up being pretty cool.</span> 
            <span className="code2"> Take a <code>short</code> <code>walk(around);</code> I don't <code>byte!</code></span>
          </div>
        </div>

        <div class="cards">
          <div class="card-container"> 
            <div class="card"><a href="https://www.alterra.id/about-us/" target="_blank" rel="noopener noreferrer">
                <div class="card--display">
                  <img src={alterra} alt="alterra" className="image"/>
                  <br/><br/><br/><br/><br/><br/>
                  <h1>Alterra</h1>
                  <h3>Software Engineering Intern</h3>
                  <p>July - September 2019</p>
                </div>
                <div class="card--hover">
                  <h2 className="card-title">Alterra</h2>
                  <img src={alterra} alt="alterra" className="image-hover1"/>
                  <h4>Software Engineering Intern | July - Sept 2019</h4>
                  <ul>
                    <li>Built a server-side application for a flexible billing system using nestJS and Express.js, reducing biller API integration time by 90%</li>
                    <br/>
                    <li>Researched and implemented Node.js microservices (rabbitMQ, redis, amqp) in typescript to provide asynchronous operations to external system configuration and processes</li>
                    <br/>
                    <li>Managed gitflow using Gitlab CI/CD for staging, and Sonarqube + GitPrime for code analysis</li>
                  </ul>
                  <br/>
                  <p><strong>Tech Stack:</strong> Typescript, nestJS, Express.JS, mongoDB, redis, rabbitMQ </p>
                  <p><strong>Other:</strong> TDD, Unit-testing, End-to-End testing</p>
                </div></a>
              <div class="card--border"></div>
            </div>
          </div>
          <div class="card-container"> 
            <div class="card"><a href="https://github.com/kevinwiranata/Speakly" target="_blank" rel="noopener noreferrer">
                <div class="card--display">
                <img src={speakly} alt="alterra" className="image"/>
                <img src={lahacks} alt="alterra" className="image-right"/>
                <br/><br/><br/><br/><br/><br/>
                  <h1>Speakly</h1>
                  <h3>Public Speaking Algorithm</h3>
                  <p>March 2019 (LA Hacks 2019)</p>
                </div>
                <div class="card--hover">
                  <h2 className="card-title">Speakly</h2> 
                  <img src={speakly} alt="alterra" className="image-hover2"/>
                  <img src={cloud} alt="alterra" className="image-hover1"/>
                  <h4>Awarded Best use of Google Cloud API (LA Hacks 2019)</h4>
                  <ul>
                    <li>Speakly uses Google's Speech-To-Text, Natural Language, and Vision API to track the speaker’s facial movements and emotions</li>
                    <br/>
                    <li>The program then utilizes this information and runs an algorithm to grade and highlight specific areas the speaker needs to improve</li>
                  </ul>
                  <br/>
                  <p><strong>Tech Stack:</strong> Python, Google Cloud API (Vision, Speech-to-Text, NLP), HTML/CSS, PHP  </p>
                </div></a>
              <div class="card--border"></div>
            </div>
          </div>
          <div class="card-container"> 
            <div class="card"><a href="https://github.com/kevinwiranata/Project-Artage" target="_blank" rel="noopener noreferrer">
                <div class="card--display">
                <img src={acm} alt="acm" className="image"/>
                <br/><br/><br/><br/><br/><br/>
                  <h1>Project Artage</h1>
                  <h3>Convolution Neural Network</h3>
                  <p>February 2019</p>
                </div>
                <div class="card--hover">
                  <h2>Project Artage</h2>
                  <h4>A Convolutional Neural Network that looks for particular features in paintings and predicts the year artwork was made</h4>
                  <img src={artage} alt="artage" className="image-hover3"/>
                  <br/>
                  <p><strong>Tech Stack:</strong> Python (numpy, pandas, keras, scipy), HTML, PHP </p>
                </div></a>
              <div class="card--border"></div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Portfolio
