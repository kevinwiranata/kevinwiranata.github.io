import React from 'react'
import './Pages.css'

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
            <span className="code"> Take a <code>short</code> <code>walk(around);</code> I don't <code>byte!</code></span>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
