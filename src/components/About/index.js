import React, { Component } from 'react'
import whiteCurve from '../../Assets/images/white-curve.svg'
import django from '../../Assets/images/django.png'
import react from '../../Assets/images/React-JS.png'
import redux from '../../Assets/images/logo-title-dark.png'
import saga from '../../Assets/images/saga.png'
import python from '../../Assets/images/python-logo.png'

import "./about.css"


export default class About extends Component {
  render () {
    return (
      <section className='about'>
      <div className="white-curve"><img src={whiteCurve} alt="" /></div>
        <div className='title'>
          <h2>About</h2>
          <p className='description'>Experienced building complex websites using Python & the Django Web framework for backend development and React JS in the frontend.</p>
        </div>
        <div className='skills'>
          <div className='skill'>
            <figure>
              <img src={react} className='react' alt='' />
            </figure>
          </div>
          <div className='skill'>
            <figure>
              <img src={redux} className='redux' alt='' />
            </figure>
          </div>
          <div className='skill' >
            <figure>
              <img src={saga} className='saga' alt='' />
            </figure>
          </div>
        </div>
        <div className='skills'>
            <div className='skill' >
              <figure>
                <img src={python} className='python' alt='' />
              </figure>
            </div>
            <div className='skill' >
              <figure>
                <img src={django} className='django' alt='' />
              </figure>
            </div>
        </div>
      </section>
    )
  }
}
