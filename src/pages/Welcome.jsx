import React from 'react'
import '../Star.css'
import {Link} from 'react-router-dom'
import '../Button.css'
import logo from '../images/logo3.png'
import UCLA from '../images/ucla.png'
import SocialFollow from '../components/SocialFollow'

const Welcome = () => {
  return (
    <div>
      <div id='stars1'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div className='title1'>
        <div>Hello! I'm <span className='name'>Kevin Wiranata</span>.</div>
        <div>I'm a Computer Engineer at&nbsp;
          <img src={UCLA} alt="UCLA"/>
         </div>
        <br/>
        <img id="optionalstuff" src={logo} alt = "Home"/>
      </div>
      <div id='title'>
        <div className='box-1'>
          <Link to='/home' className = 'btn btn-three'>
          Enter
          </Link>
        </div>
        <br/>
        <SocialFollow>
        </SocialFollow>
      </div>


    </div>
  )
}

export default Welcome
