import React, { Component } from 'react'
import headerCurve from '../../Assets/images/header-curve.svg';


export default class Header extends Component {
  render () {
    return (
      <header class="hero">
        <div class="container">
          <header>
            <div class="branding">
              <img src="img/logo.png" alt="Dust" />
            </div>
            <nav>
              <a href="#" class="join signup">Join alpha</a>
              <a href="https://twitter.com/dustcrypto" class="social"><img src="img/icon-twitter.svg" alt="Twitter" /></a>
              <a href="https://www.facebook.com/Dust-108192633212782/" class="social"><img src="img/icon-facebook.svg" alt="Facebook" /></a>
              <a href="https://t.me/dustapp" class="social"><img src="img/icon-telegram.svg" alt="Telegram" /></a>
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
              <img src="img/screenshot.png" alt="" />
            </div>
          </div>
        </div>
        <div class="curve"><img src="img/header-curve.svg" alt="" /></div>
      </header>
    )
  }
}
