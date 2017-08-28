import React, { Component } from 'react'
import GS_title from '../../Assets/images/gs_logo.svg'
import GS_logo from '../../Assets/images/logo-inverted.svg'
import sF from '../../Assets/images/sparesfinder_logo.png'
import Dust from '../../Assets/images/logo.svg'

import "./portfolio.css"


export default class Portfolio extends Component {
  render () {
    return (
      <div className='portfolio'>
        <div className='title'>
          <h2>Portfolio</h2>
          <p className='description'>Financial Services - Cryptocurrency Exchange - Big Data Management</p>
        </div>
        <div className='projects'>
          <div className='gs-box'>
            <figure>
              <a href='https://growthstreet.co.uk'><img src={GS_logo} className='gs' alt='' /></a>
              <img src={GS_title} className='gs_title' alt='' />
            </figure>
          </div>
          <div className='dust-box'>
            <figure>
              <a href='https://dustapp.io'><img src={Dust} className='dust' alt='' /></a>
            </figure>
          </div>
          <div className='sF-box' >
            <figure>
              <a href='https://sparesfinder.com'><img src={sF} className='sF' alt='' /></a>
            </figure>
          </div>
        </div>
      </div>
    )
  }
}
