import React, { Component } from 'react'
import facebook from '../../Assets/images/icon-facebook.svg';
import twitter from '../../Assets/images/icon-twitter.svg';
import telegram from '../../Assets/images/icon-telegram.svg';
import slack from '../../Assets/images/icon-slack.svg';


import "./header.css"

export default class Header extends Component {
  render () {
    return (
      <header class="hero">
        <div class="container">
          <header>
            <div class="branding">
              <img src="../../assets/images/logo.png" alt="Dust"></img>
            </div>
            <nav>
              <a href="#" class="join signup">Join alpha</a>
              <a href="https://twitter.com/dustcrypto" class="social"><img src={twitter} alt="Twitter"></img></a>
              <a href="https://www.facebook.com/Dust-108192633212782/" class="social"><img src={facebook} alt="Facebook"></img></a>
              <a href="https://t.me/dustapp" class="social"><img src={telegram} alt="Telegram"></img></a>
            </nav>
          </header>
          <div class="intro">
            <div class="content">
              <h1 class="display-1 wow fadeInUp" data-wow-duration=".5s">Investing your spare change into cryptocurrency</h1>
              <p class="wow fadeInUp" data-wow-delay=".25s" data-wow-duration=".5s">Dust takes the small change from your every day spending and invests it into your choice of cryptocurrency portfolio.</p>
              <footer>
                <a href="#" class="btn btn-secondary signup wow fadeIn" data-wow-delay=".5s">Request early access</a>
              </footer>
            </div>
            <div class="screenshot">
              <img src="../../assets/images/screenshot.png" alt=""></img>
            </div>
          </div>
        </div>
        <div class="curve"><img src="../../assets/images/header-curve.svg" alt=""></img></div>
      </header>
    )
  }
}
