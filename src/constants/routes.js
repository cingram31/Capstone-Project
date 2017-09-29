import React from 'react';
import Intro from '../components/VJSIntro';
import Operators from '../components/operators';
import Conditionals from '../components/conditionals';

export const routes = [
	{ path: '/' || '/VJSIntro',
	  exact: true,
	  sidebar: () => <div>VJSIntro</div>,
	  main: () => <h2><Intro /></h2>
	},
	{ path: '/operators',
	  sidebar: () => <div>Operators</div>,
	  main: () => <Operators />
	},
	{ path: '/conditionals',
	  sidebar: () => <div>Conditionals</div>,
	  main: () => <Conditionals />
	},
]