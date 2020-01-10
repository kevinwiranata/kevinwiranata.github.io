import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook
} from "@fortawesome/free-brands-svg-icons"
import '../css/App.css'

export default function   socialFollow() {
  return (
    <div className='social-container'>
      <a href="https://www.facebook.com/kevin.wiranata123/" className='facebook social' target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook}/>
      </a>
      <a href="https://www.linkedin.com/in/kevin-wiranata-b127b4175/" className='linkedin social' target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin}/>
      </a>
      <a href="https://www.instagram.com/kevinwiranataaa/" className='instagram social' target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram}/>
      </a>
      <a href="https://github.com/kevinwiranata" className='github social' target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub}/>
      </a>

    </div>
  )
}
