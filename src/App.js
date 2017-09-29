import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/VJSIntro';
import Routes from './Routes.js';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { routes } from './constants/routes';

class App extends Component {
  render() {
    return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Vanilla Javascript</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <hr />
      <div >
        <Intro />
        <operators />
        <conditionals />
      </div>
    </div>


    );
  }
}

export default App;
