import React from 'react';
import { Router, Route, hashHistory } from 'react-router'
import ReactDOM from 'react-dom';

import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';

import css from './style.js'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	render() {
		return (
			<div>
				<NavBar />
			</div>
		);
	}
}

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App} />
		<Route path="/about" component={About} />
		<Route path="/contact" component={Contact} />
		<Route path="*" component={App} />
	</Router>,
	document.getElementById('app')
);
