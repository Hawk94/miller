import React, { Component } from 'react';
import Header from './../Header';
import Nav from './../Nav';
import Portfolio from './../Portfolio';
import About from './../About';
import Contact from './../Contact';

import "./home.css"


export default class Home extends Component {
  render () {
    return (
      <div className='Home'>
        <div className='Home-header'>
          <Nav />
          <Header />
        </div>
        <div className='Home-intro'>
          <Portfolio />
        </div>
        <div className='Home-body'>
          <About />
          <Contact />
        </div>
      </div>
    )
  }
}
