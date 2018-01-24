import React, { Component } from 'react'
import whiteCurve from '../../Assets/images/white-curve.svg'


import "./info.css"


export default class Info extends Component {
  render () {
    return (
      <section className='info'>
      <div className="white-curve"><img src={whiteCurve} alt="" /></div>
        <div className='title'>
          <h2>Info</h2>
          <p className='description'>Get a better overview of what your spending. Distinguish between nessecesities and luxuries, start saving now.</p>
        </div>
      </section>
    )
  }
}
