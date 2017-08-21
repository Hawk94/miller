import React, { Component } from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';


import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <Header />
        </div>
        <div className='App-intro'>
          <Portfolio />
        </div>
        <div className='App-body'>
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
