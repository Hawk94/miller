import React, { Component } from 'react'
import whiteCurve from '../../Assets/images/white-curve.svg'


export default class About extends Component {
  render () {
    return (
      <section className='about'>
        <div className="white-curve"><img src={whiteCurve} alt="" /></div>
        <div className="container">
          <h2 className="section-header">How does it work?</h2>
          <div className="divider light"></div>

          <div className="carousel-holder wow fadeIn">
            <span className="carousel-arw prev"></span>
            <span className="carousel-arw next"></span>
            <div className="carousel">
              <img src="img/step-1.png" alt="" />
              <img src="img/step-2.png" alt="" />
              <img src="img/step-3.png" alt="" />
            </div>
          </div>

          <p className="carousel-tip">Make a purchase in-store or online using your linked card</p>

          <div className="carousel-dots"></div>

          <div className="join">
            <h2 className="section-header  wow fadeIn">Dust is currently in  alpha. If you’d like to get your hands on it early, please request an invite</h2>
            <div className="divider light"></div>
            <a href="#" className="btn primary signup wow fadeIn" data-wow-delay=".25s">Join the alpha</a>
          </div>
        </div>
      </section>
    )
  }
}
