import React from 'react';
import Intro from '../components/VJSIntro';
import Statevsexpress from '../components/statevsexpress';
import Conditionals from '../components/conditionals';
import Loops from '../components/loops';

export const routes = [
	{ path: '/' || '/VJSIntro',
	  exact: true,
	  sidebar: () => <div>VJSIntro</div>,
	  main: () => <h2><Intro /></h2>
	},
	{ path: '/statevsexpress',
	  sidebar: () => <div>Statements vs Expressions</div>,
	  main: () => <Statevsexpress />
	},
	{ path: '/conditionals',
	  sidebar: () => <div>Conditionals</div>,
	  main: () => <Conditionals />
	},
	{ path: '/loops',
	  sidebar: () => <div>Loops</div>,
	  main: () => <Loops />
	},
]