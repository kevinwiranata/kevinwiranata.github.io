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
      <a href="https://www.facebook.com/kevin.wiranata123/" className='facebook social'>
        <FontAwesomeIcon icon={faFacebook}/>
      </a>
      <a href="https://www.linkedin.com/in/kevin-wiranata-b127b4175/" className='linkedin social'>
        <FontAwesomeIcon icon={faLinkedin}/>
      </a>
      <a href="https://www.instagram.com/kevinwiranataaa/" className='instagram social'>
        <FontAwesomeIcon icon={faInstagram}/>
      </a>
      <a href="https://github.com/kevinwiranata" className='github social'>
        <FontAwesomeIcon icon={faGithub}/>
      </a>

    </div>
  )
}
