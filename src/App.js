import React, { Component } from 'react';
import Header from './components/Header/index'
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
        </div>
        <div className='App-body'>
        </div>
      </div>
    );
  }
}

export default App;
