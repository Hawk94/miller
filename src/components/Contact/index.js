import React, { Component } from 'react'
import headerCurve from '../../Assets/images/grey-curve.svg'
import facebook from '../../Assets/images/icon-facebook.svg';
import twitter from '../../Assets/images/icon-twitter.svg';
import telegram from '../../Assets/images/icon-telegram.svg';
import linkedin from '../../Assets/images/linkedin.svg';
import email from '../../Assets/images/envelope.svg';

import "./contact.css"


export default class Contact extends Component {
  render () {
    return (
      <div className='contact'>
      <img src={headerCurve} className='white-curve' alt='' />
        <div className='contact_title'>
          <h2 className='whiteHeader'>Contact</h2>
        </div>
        
        <footer className="footer">
          <div className="container">
            <div className="divider dark"></div>
            <nav className='lowerNav'>
              <a href="https://twitter.com/millertom_94" className="social"><img src={twitter} alt="Twitter" /></a>
              <a href="https://www.facebook.com/x99tom.miller/" className="social"><img src={facebook} alt="Facebook" /></a>
              <a href="https://t.me/joinchat/AAAAAEOvLZPVgDx-9sGKQQ" className="social"><img src={telegram} alt="Telegram" /></a>
              <a href="https://www.linkedin.com/in/tom-miller-9b205139/" className="social"><img src={linkedin} alt="Linkedin" /></a>
              <a href="mailto:hello@miller.mx" className="contact"><img className='email' src={email} alt="Email" /></a>
            </nav>
          </div>
        </footer>
      </div>
    )
  }
}
