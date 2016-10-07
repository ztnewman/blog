import React from 'react';
import { Link } from 'react-router';

import Header from './Header';
import History from './History';
import Input from './Input';

export default class Terminal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			commandHistory: []
		}
		this.user = `${location.host}:~ guest$`;
	}
	setValue(target) {
		this.setState({
			value: target
		});
	}
	clearHistory() {
		this.setState({
			value: '',
			commandHistory: []
		});
	}
	newCommand() {
		let count = this.state.commandCount + 1;
		this.setState({
			value: '',
			commandHistory: this.state.commandHistory.concat([this.state.value]),
			commandCount: count
		});
	}
	prevCommand(i) {
		this.setState({
			value: this.state.commandHistory[i]
		});
	}
	clearCommand() {
		this.setState({
			value: ''
		});
	}
	render() {
		return (
			<div className="terminal">
				<Header />
				<History
					user={this.user}
					commandHistory={this.state.commandHistory} />
				<Input
					user={this.user}
					value={this.state.value}
					commandCount={this.state.commandHistory.length}
					clearHistory={this.clearHistory.bind(this)}
					newCommand={this.newCommand.bind(this)}
					prevCommand={this.prevCommand.bind(this)}
					clearCommand={this.clearCommand.bind(this)}
					setValue={this.setValue.bind(this)} />
			</div>
		);
	}
}
