import React from 'react';
import ReactDOM from 'react-dom';

import Passcode from './components/Passcode'


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			requirePasscode: true,
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
			return (<Passcode onAuthentication={this.onAuthentication.bind(this)}/>);
		} else {
			return (
				<h1>Welcome, Stranger</h1>
			);
		}
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
