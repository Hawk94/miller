import React, { Component } from 'react'
import GS from '../../Assets/images/gs_logo.svg'
import sF from '../../Assets/images/sF_logo.svg'
import Dust from '../../Assets/images/logo.svg'

import "./portfolio.css"


export default class Portfolio extends Component {
  render () {
    return (
      <div className='portfolio'>
        <div className='feature'>
          <figure>
            <a href='https://growthstreet.co.uk'><img src={GS} className='gs' alt='' /></a>
          </figure>
          <h4>Growth Street</h4>
          <span>P2P Lending</span>
        </div>
        <div className='feature'>
          <figure>
            <a href='https://dustapp.io'><img src={Dust} className='dust' alt='' /></a>
          </figure>
          <h4>Dust</h4>
          <span>Cryptocurrency services</span>
        </div>
        <div className='feature' >
          <figure>
            <a href='https://sparesfinder.com'><img src={sF} className='sF' alt='' /></a>
          </figure>
          <h4>sparesFinder</h4>
          <span>Materials data management</span>
        </div>
      </div>
    )
  }
}
