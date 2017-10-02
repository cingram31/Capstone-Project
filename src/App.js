import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/VJSIntro';
import Routes from './Routes.js';
import logo from './logo.svg';
import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { routes } from './constants/routes';

const App = () => (
  <div>
    <Router>
      <Routes />
    </Router>
  </div>
  )


export default App;
