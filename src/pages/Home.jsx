import React, { Component } from 'react';
import '../css/Pages.css';
import Typical from 'react-typical';


export class Home extends Component {
  state = {}
  render() {
    return (
      <div className="home-section" id = "home">
      <section id="intro" class="section full-height">
        <div class="overlay"></div>
        <div class="container">
          <h2>
            I work to <span class="teal">build things</span><br/> <span>that </span> 
            <span class="underline">solve your problems</span>.
          </h2>
        </div>
        <div className="container-right">
          <h1>I love to code..<span className="blinking">.</span> <br/>
          <Typical
            steps={['C/C++', 3000, 'HTML/CSS', 3000, 'Javascript', 3000, 'Python', 3000, 'Typescript', 3000]}
            loop={Infinity}
            wrapper="b"/>
          </h1>
        </div>
      </section>
      </div>
    )
  }
}
 
export default Home
