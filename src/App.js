import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes.js';
import Home from './components/home';
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
