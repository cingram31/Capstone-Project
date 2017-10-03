import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

import { routes } from './constants/routes';

const Routes = () => (

	<div style={{ display: 'flex' }}>
		<div style={{
			padding: '30px',
			width: '20%',
			background: '#f0f0f0',

		}}>

			<ul style={{ listStyleType: 'none', padding: 0 }}>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/VJSIntro">Intro</Link></li>
				<li><Link to="/statevsexpress">Statements vs Expression</Link></li>
				<li><Link to="/conditionals">Conditionals</Link></li>
				<li><Link to="/loops">Loops</Link></li>
			</ul>
		</div>

		<div style={{ flex: 1, padding: '10px' }}>
			{routes.map((route, index) => (
				<Route
					key={index}
					path={route.path}
					exact={route.exact}
					component={route.main}
				/>
				))}
				</div>
			</div>
			)

export default Routes;