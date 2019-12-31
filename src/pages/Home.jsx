import React, { Component } from 'react'
import './Pages.css'


export class Home extends Component {
  state = {}
  render() {
    return (
      <div className="home-section" id = "home">
      <section id="intro" class="section full-height">
        <div class="overlay"></div>
        <div class="container">
          <h2>
            I work to <span class="teal">build things</span><br/>that 
            <span class="underline"> solve your problems</span>.
          </h2>
        </div>
      </section>
      </div>
    )
  }
}
 
export default Home
