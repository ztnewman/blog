import React from 'react';
import ReactDOM from 'react-dom';

import Passcode from './components/Passcode'
import Main from './components/Main'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			requirePasscode: false,
			isAuthenticated: false
		}
	}
	onAuthentication() {
		this.setState({
			isAuthenticated: true
		});
	}
	render() {
		if (this.state.requirePasscode && !this.state.isAuthenticated) {
			return (
				<Passcode onAuthentication={this.onAuthentication.bind(this)} />
			);
		} else {
			return (
				<Main />
			);
		}
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
