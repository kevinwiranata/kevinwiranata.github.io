import React, { Component } from 'react'
import logo from '../images/logo2.svg';
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const navStyle = {
    fontSize: '23px',
    paddingRight: '36px',
    fontWeight: 500,
};

export default class Navbar extends Component {
  state = {
    isOpen:false    
  }

  // toggles navbar state on and off on click
  handleToggle = () => {
    this.setState({isOpen:!this.state.isOpen})
  }
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/"> <img src={logo} alt = "Home"/></Link>
            <button type="button" className="nav-btn" onClick = {this.handleToggle}>
              <FaAlignRight className="nav-icon"/>
            </button>
          </div>
          <ul className={this.state.isOpen?"nav-links show-nav":"nav-links "}>
            <li>
              <Link to="/home" style={navStyle}>Home</Link>
            </li>
            <li>
            <Link to="/projects" style={navStyle}>Projects</Link>
            </li>
            <li>
            <Link to="/contact" style={navStyle}>Contact Me!</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
