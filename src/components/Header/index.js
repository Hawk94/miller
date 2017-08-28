import React, { Component } from 'react'
import headerCurve from '../../Assets/images/header-curve.svg';
import "./header.css"


export default class Header extends Component {
  render () {
    return (
      <div className='header'>
        <div className='content-heading'>
          <h1>Tom Miller</h1>
          <p className='content'>Web Developer - Graphic Artist - User Experience Designer</p>
        </div>
        <img src={headerCurve} className='curve' alt='' />
      </div>
    )
  }
}
