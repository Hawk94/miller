import React, { Component } from 'react'
import headerCurve from '../../Assets/images/grey-curve.svg'

import "./contact.css"


export default class Contact extends Component {
  render () {
    return (
      <div className='contact'>
      <img src={headerCurve} className='white-curve' alt='' />
        <div className='title'>
          <h1>Contact</h1>
          <p className='description'>Web Developer - Graphic Artist - User Experience Designer</p>
        </div>
      </div>
    )
  }
}
