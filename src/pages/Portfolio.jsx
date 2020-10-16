import React from "react";
import "../css/Pages.css";
import "react-animated-slider/build/horizontal.css";
import alterra from "../images/alterra.png";
import speakly from "../images/speakly.ico";
import blibli from "../images/blibli.png"
import cloud from "../images/cloud.png";

export class Portfolio extends React.Component {
  state = {};
  render() {
    return (
      <div className="portfolio-section" id="portfolio">
        <div className="portfolio-banner">
          <blockquote className="portfolio">
            <h1>Portfolio</h1>
          </blockquote>
          <div className="description">
            <span>
              Sometimes I like to make things, occasionally they actually end up
              being pretty cool.
            </span>
            <span className="code2">
              {" "}
              Take a <code>short</code> <code>walk(around);</code> I don't{" "}
              <code>byte!</code>
            </span>
          </div>
        </div>

        <div class="cards">

        <div class="card-container">
            <div class="card">
              <a
                href="https://www.blibli.com//"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="card--display">
                  <h2 className="card-title">BliBli.com</h2>
                  <img src={blibli} alt="alterra" className="image-hover1" />
                  <h4>Software Engineering Intern | June - Aug 2020</h4>
                  <ul class="card-text">
                    <li>
                    Implemented a backend transport order system to track 
                    the movement of merchant’s goods in warehouses by creating 
                    an order management system using Java Spring Boot RESTful 
                    API with PostgreSQL databases complete with JUnit tests.
                    </li>
                    <br />
                    <li>
                    Launched live production deployment by configuring Jenkins, 
                    Jmeter and PostgreSQL.
                    </li>
                    <br />
                    <li>
                    Utilized the commander OOP design pattern with Apache 
                    Kafka publisher/listener state management.
                    </li>
                  </ul>
                  <br />
                  <p class="card-text">
                    <strong>Tech Stack:</strong> Java, Spring Boot, PostgreSQL
                    mongoDB, Kafka, JUnit {" "}
                  </p>
                </div>
              </a>
              <div class="card--border"></div>
            </div>
          </div>
          
          <div class="card-container">
            <div class="card">
              <a
                href="https://www.alterra.id/about-us/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="card--display">
                  <h2 className="card-title">Alterra</h2>
                  <img src={alterra} alt="alterra" className="image-hover1" />
                  <h4>Software Engineering Intern | July - Sept 2019</h4>
                  <ul class="card-text">
                    <li>
                      Built a server-side application for a flexible billing
                      system using nestJS and Express.js, reducing biller API
                      integration time by 90%
                    </li>
                    <br />
                    <li>
                      Researched and implemented Node.js microservices
                      (rabbitMQ, redis, amqp) in typescript to provide
                      asynchronous operations to external system configuration
                      and processes
                    </li>
                    <br />
                    <li>
                      Managed gitflow using Gitlab CI/CD for staging, and
                      Sonarqube + GitPrime for code analysis
                    </li>
                  </ul>
                  <br />
                  <p class="card-text">
                    <strong>Tech Stack:</strong> Typescript, nestJS, Express.JS,
                    mongoDB, redis, rabbitMQ, Jest (unit/integration tests){" "}
                  </p>
                </div>
              </a>
              <div class="card--border"></div>
            </div>
          </div>
          
          <div class="card-container">
            <div class="card">
              <a
                href="https://github.com/kevinwiranata/Speakly"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="card--display">
                  <h2 className="card-title">Speakly</h2>
                  <img src={speakly} alt="speakly" className="image-hover2" />
                  <img src={cloud} alt="gcloud" className="image-hover1" />
                  <h4>Awarded Best use of Google Cloud API (LA Hacks 2019)</h4>
                  <ul class="card-text">
                    <li>
                      Speakly uses Google's Speech-To-Text, Natural Language,
                      and Vision API to track the speaker’s facial movements and
                      emotions
                    </li>
                    <br />
                    <li>
                      The program then utilizes this information and runs an
                      algorithm to grade and highlight specific areas the
                      speaker needs to improve
                    </li>
                  </ul>
                  <br />
                  <p class="card-text">
                    <strong>Tech Stack:</strong> Python, Google Cloud API
                    (Vision, Speech-to-Text, NLP), HTML/CSS, PHP{" "}
                  </p>
                </div>
              </a>
              <div class="card--border"></div>
            </div>
          </div>
      
        </div>
      </div>
    );
  }
}

export default Portfolio;
