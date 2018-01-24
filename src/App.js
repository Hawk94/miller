import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home';
import Budget from './components/Budget';
import Privacy from './components/Privacy';
import Terms from './components/Terms';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/budget" component={Budget} />
              <Route exact path="/privacy" component={Privacy} />
              <Route exact path="/terms" component={Terms} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
