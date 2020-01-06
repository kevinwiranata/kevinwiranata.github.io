import React from 'react'
import '../css/Pages.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import alterra from '../images/alterra.gif'
import lahacks from '../images/lahacks.jpeg'
import acm from '../images/acmai.png'

const slides = [
  { title: 'Alterra', description: 'Software Engineering Internship', className: 'wrap1', image: alterra},
  { title: 'Speakly', description: 'Lorem ipsum', className: 'wrap2', image: lahacks},
  { title: 'Project Artage', description: 'Lorem ipsum', className: 'wrap3', image: acm}
  
];


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

        <Slider autoplay={1000} infinite={true}>
          {slides.map((slide, index) => <div key={index}>
            <div className={slide.className}>
              <img id="image" src={slide.image} alt="logo"/>
              <h1 className= "slider-h1">{slide.title}</h1>
              <div>{slide.description}</div>
            </div>
          </div>)}
        </Slider>
      </div>
    )
  }
}

export default Portfolio
