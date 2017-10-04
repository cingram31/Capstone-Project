import React from 'react';
import Home from '../components/home';
import Intro from '../components/VJSIntro';
import Statevsexpress from '../components/statevsexpress';
import Conditionals from '../components/conditionals';
import Loops from '../components/loops';
import Glossary from '../components/Glossary';

export const routes = [
	{ path: '/' || '/home',
	  exact: true,
	  sidebar: () => <div>Home</div>,
	  main: () => <h2><Home /></h2>
	},
	{ path: '/VJSIntro',
	  sidebar: () => <div>VJSIntro</div>,
	  main: () => <Intro />
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
	{ path: '/Glossary',
	  sidebar: () => <div>Glossary</div>,
	  main: () => <Glossary />
	}
]