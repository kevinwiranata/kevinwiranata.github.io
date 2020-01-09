import React from 'react'
import reactLogo from '../images/react.png';
import jsLogo from '../images/js.png';
import tsLogo from '../images/typescript.png';
import nestLogo from '../images/nest.png';
import htmlLogo from '../images/html.png'
import cssLogo from '../images/css.png'
import nodeLogo from '../images/node.png'
import STMLogo from '../images/STM.png';
import ArduinoLogo from '../images/Arduino.png'
import EnergiaLogo from '../images/Energia.png'
import PythonLogo from '../images/Python.png'
import TensorLogo from '../images/Tensorflow.png'
import KerasLogo from '../images/keras.png'
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
            <p class="new"><span className="area">Frontend: </span>Reactjs, HTML5, CSS3/SASS, Node.js</p>
            <p class="new"><span className="area">Backend: </span>Nestjs, ExpressJS, Typescript, SQL, MongoDB</p>
            <p class="old"><span className="area">Other: </span>C/C++, Git, Vim, Shell/Bash, TDD, x86-64, Verilog, Ansys, </p>
          </div>
          <div class="items cart">
            <i class="fa fa-shopping-cart"></i>
            <img src={reactLogo} alt="react" className="resize"></img>
            <span/>
            <img src={jsLogo} alt="javascript" className="resize"></img>
            <span/><span/>
            <img src={tsLogo} alt="typescript" className="resize"></img>
            <span/><span/>
            <img src={nestLogo} alt="nest" className="resize"></img>
            <br/><br/>
            <img src={htmlLogo} alt="html" className="resize"></img>
            <span/><span/>
            <img src={cssLogo} alt="css" className="resize"></img>
            <span/><span/>
            <img src={nodeLogo} alt="node" className="resize"></img>
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
            <p class="old">Hardware: Arduino/Energia, Wireless Beaglebone, STM-Microelectronics Sensortile</p>
            <p class="new">Software: Python (numpy, keras, Tensorflow, neural nets), SQL </p>
          </div>
          <div class="items cart">
            <i class="fa fa-shopping-cart"></i>
            <img src={STMLogo} alt="STM" className="resize"></img>
            <span/><span/>
            <img src={ArduinoLogo} alt="Arduino" className="resize"></img>
            <span/><span/>
            <img src={EnergiaLogo} alt="Energia" className="resize"></img>
            <br/>
            <br/>
            <img src={PythonLogo} alt="Python" className="resize"></img>
            <span/><span/><span/><span/>
            <img src={KerasLogo} alt="Keras" className="resize"></img>
            <span/><span/><span/><span/>
            <img src={TensorLogo} alt="Tensorflow" className="resize"></img>

          </div>
        </div>
      </div>

      <div class="container right">
        <div class="overlay">
          <div class = "items head">
            <p>Hobbies</p>
            <hr/>
          </div>
          <div class = "items price">
            <p class="old">Description 1</p>
            <p class="new">Description 2</p>
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
