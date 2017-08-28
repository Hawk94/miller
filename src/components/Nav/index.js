import React, { Component } from 'react'
import Sticky from 'react-sticky-el'
import logo from '../../logo.svg'
import facebook from '../../Assets/images/icon-facebook.svg';
import twitter from '../../Assets/images/icon-twitter.svg';
import telegram from '../../Assets/images/icon-telegram.svg';
import slack from '../../Assets/images/icon-slack.svg';
import "./nav.css"

export default class Nav extends Component {
  render () {
    return (
      <div className='nav'>
        <nav>
        <a href='https://miller.mx'><img src={logo} className='App-logo' alt='logo' /></a>
        <p className='social-links'>
          <a href='https://dustapp.slack.com' className='social'><img src={slack} className='social-image' alt='Slack' /></a>
          <a href='https://twitter.com/dustcrypto' className='social'><img src={twitter} className='social-image' alt='Twitter' /></a>
          <a href='https://www.facebook.com/Dust-108192633212782/' className='social'><img src={facebook} className='social-image' alt='Facebook' /></a>
          <a href='https://t.me/joinchat/Ajb2Y0RyndwDiEAO4V-4qQ' className='social'><img src={telegram} className='social-image' alt='Slack' /></a>
        </p>

        </nav>
      </div>
    )
  }
}
