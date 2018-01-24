import React, { Component } from 'react'
import Nav from './../Nav';
import Info from './../Info';
import Contact from './../Contact';
import GoogleLogo from '../../Assets/images/google_logo.png'
import StarlingLogo from '../../Assets/images/starling_logo.png'
import Notifications from '../../Assets/images/notifications.svg'
import headerCurve from '../../Assets/images/header-curve.svg';

import "./budget.css"

export default class Budget extends Component {
  render() {
    return (
      <div className='Budget'>
        <div className='Budget-header'>
          <Nav />
          <div className='header'>
            <div className='content-heading'>
              <h1>Challenger Budget</h1>
              <p className='content'>Starling + Google Sheets + Intelligent Insights</p>
            </div>
            <img src={headerCurve} className='curve' alt='' />
          </div>
        </div>
        <div className='Budget-intro'>
          <div className='content'>
            <div className='title'>
              <h2>Take control of your money</h2>
              {/* <p className='description'>Find out what you spend, where...</p> */}
            </div>
            <div className='projects'>
              <div className='starling-box'>
                <figure>
                  <a href='https://www.starlingbank.com/'><img src={StarlingLogo} className='starling' alt='' /></a>
                </figure>
              </div>
              <div className='google-box'>
                <figure>
                  <a href='https://www.google.co.uk'><img src={GoogleLogo} className='google' alt='' /></a>
                </figure>
              </div>
              <div className='notifications-box' >
                <figure>
                  <a href='https://miller.mx'><img src={Notifications} className='notifications' alt='' /></a>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className='Budget-body'>
          <Info />
          <Contact />
        </div>
      </div>
    );
  }
}
