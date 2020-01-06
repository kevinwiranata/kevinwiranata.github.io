import React from 'react'
import reactLogo from '../images/react.png';
import jsLogo from '../images/js.gif';
import tsLogo from '../images/typescript.gif';
import nestLogo from '../images/nest.gif';
import '../css/Pages.css';

const About = () => {
  return (
    <div className="about-section" id = "about">
      <div className="about-banner">
        <blockquote>
          <h1>About me!</h1>
        </blockquote>
        <div className="description">
          <span>Second year Computer Engineering Student at UCLA | Mission-driven Full Stack Developer & Data Junkie</span>
          <span className="code1">One day I'd like to <code>double up;</code> as a Randall Park <code>char acter;</code></span>
        </div>
      </div>

      <div class="container left">
        <div class="overlay">

          <div class = "items head">
            <p>Full Stack Developer</p>
            <hr/>
          </div>
          <div class = "items price">
            <p class="old"><span className="area">Frontend: </span>Reactjs, HTML5, CSS3/SASS, Node.js</p>
            <p class="new"><span className="area">Backend: </span>Nestjs, ExpressJS, Typescript, SQL, MongoDB</p>
            <p class="new"><span className="area">Other: </span>C/C++, Git, x86-64, Verilog, Ansys </p>
          </div>
          <div class="items cart">
            <i class="fa fa-shopping-cart"></i>
            <img src={reactLogo} alt="react"></img>
            <span/>
            <img src={jsLogo} alt="react"></img>
            <span/><span/>
            <img src={tsLogo} alt="react"></img>
            <span/><span/>
            <img src={nestLogo} alt="react"></img>
          </div>
        </div>
      </div>

      <div class="container middle">
        <div class="overlay">
          <div class = "items head">
            <p>Data & Robotics Enthusiast</p>
            <hr/>
          </div>
          <div class = "items price">
            <p class="old">Hardware: Arduino, Wireless Beaglebone, STM-Microelectronics</p>
            <p class="new">Software: Python (numpy, keras, Tensorflow), SQL </p>
          </div>
          <div class="items cart">
            <i class="fa fa-shopping-cart"></i>
            <span>Logos go here</span>
          </div>
        </div>
      </div>

      <div class="container right">
        <div class="overlay">
          <div class = "items head">
            <p>Something</p>
            <hr/>
          </div>
          <div class = "items price">
            <p class="old">Description 1</p>
            <p class="new">Pusing anjir mau nulis apa</p>
          </div>
          <div class="items cart">
            <i class="fa fa-shopping-cart"></i>
            <span>Logos go here</span>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About
