import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <Nav />
          <Header />
        </div>
        <div className='App-intro'>
          <Portfolio />
        </div>
        <div className='App-body'>
          <About />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
