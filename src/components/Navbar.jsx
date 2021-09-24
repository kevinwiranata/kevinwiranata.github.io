import React, { Component } from 'react'
import logo from '../images/logo4.svg';
import {FaAlignRight} from 'react-icons/fa'
import {Link as LinkRoute} from 'react-router-dom'
import { Link as LinkScroll } from "react-scroll";


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
            <LinkRoute to="/"> <img src={logo} alt = "Welcome Page"/></LinkRoute>
            <button type="button" className="nav-btn" onClick = {this.handleToggle}>
              <FaAlignRight className="nav-icon"/>
            </button>
          </div>
          <ul className={this.state.isOpen?"nav-links show-nav":"nav-links "}>
            <li>
              <LinkScroll 
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration= {888}
              style={navStyle}>
                Home
              </LinkScroll>
            </li>
            <li>
              <LinkScroll 
              to="about"
              spy={true}
              smooth={true}
              offset={-45}
              duration= {888}
              style={navStyle}>
                About
              </LinkScroll>
            </li>
            <li>
            <LinkScroll 
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-45}
              duration= {888}
              style={navStyle}>
                Portfolio
              </LinkScroll>
            </li>
            <li>
            <LinkScroll 
              to="contact"
              spy={true}
              smooth={true}
              offset={-66}
              duration= {888}
              style={navStyle}>
                Contact Me!
              </LinkScroll>
            </li>
            <li>
            <a rel="noopener noreferrer" target="_blank" style={navStyle} href="https://d1b10bmlvqabco.cloudfront.net/user_resumes/jqzv730o4vt3pq/jqzv730o4vt3pq_1632458785.pdf"> <span>Résumé</span></a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
