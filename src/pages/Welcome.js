import React from 'react'
import '../Star.css'
import {Link} from 'react-router-dom'
import '../Button.css'
import logo from '../images/logo2.svg'
import SocialFollow from '../components/SocialFollow'

const Welcome = () => {
  return (
    <div>
      <div id='stars1'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div className='title1'>
        <div>Hello! <span>I'm Kevin Wiranata</span>.</div>
        <div>I'm a Computer Engineer at UCLA.</div>
      </div>
      <div id='title'>
        <div className='box-1'>
          <Link to='/home' className = 'btn btn-one'>
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
