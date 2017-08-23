import React, { Component } from 'react'

import "./about.css"


export default class About extends Component {
  render () {
    return (
      <section className='About'>
        <div class="curve"><img src="img/white-curve.svg" alt="" /></div>
        <div class="container">
          <h2 class="section-header">How does it work?</h2>
          <div class="divider light"></div>

          <div class="carousel-holder wow fadeIn">
            <span class="carousel-arw prev"></span>
            <span class="carousel-arw next"></span>
            <div class="carousel">
              <img src="img/step-1.png" alt="" />
              <img src="img/step-2.png" alt="" />
              <img src="img/step-3.png" alt="" />
            </div>
          </div>

          <p class="carousel-tip">Make a purchase in-store or online using your linked card</p>

          <div class="carousel-dots"></div>

          <div class="join">
            <h2 class="section-header  wow fadeIn">Dust is currently in  alpha. If you’d like to get your hands on it early, please request an invite</h2>
            <div class="divider light"></div>
            <a href="#" class="btn primary signup wow fadeIn" data-wow-delay=".25s">Join the alpha</a>
          </div>
        </div>
      </section>
    )
  }
}
