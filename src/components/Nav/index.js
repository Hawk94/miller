import React, { Component } from 'react'
import logo from '../../logo.svg'
import twitter from '../../Assets/images/icon-twitter.svg';
import telegram from '../../Assets/images/icon-telegram.svg';
import slack from '../../Assets/images/icon-slack.svg';
import linkedin from '../../Assets/images/linkedin.svg';
import "./nav.css"

export default class Nav extends Component {
  render () {
    return (
      <div className='nav'>
        <nav>
        <a id='link' href='https://miller.mx'><img src={logo} className='App-logo' alt='logo' /></a>
        <p className='social-links'>
          <a id='link' href='https://millermiller.slack.com' className='social'><img src={slack} className='social-image' alt='Slack' /></a>
          <a href="https://twitter.com/millertom_94" className="social"><img src={twitter} alt="Twitter" /></a>
          <a href="https://t.me/joinchat/AAAAAEOvLZPVgDx-9sGKQQ" className="social"><img src={telegram} alt="Telegram" /></a>
          <a href="https://www.linkedin.com/in/tom-miller-9b205139/" className="social"><img src={linkedin} alt="Linkedin" /></a>
        </p>

        </nav>
      </div>
    )
  }
}
