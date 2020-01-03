import React from 'react'
//import Programmer from '../images/Programmer.jpg'
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
        </div>
      </div>
      {/*<img src={Programmer} alt="programmer" className="programmer"/>*/}    
    </div>

  )
}

export default About
