import React from 'react';
import { Link } from 'react-router';

import Header from './Header';
import History from './History';
import Input from './Input';
import Result from './Result';

export default class Terminal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			commandHistory: [],
			focusInput: true
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
	newCommand(command) {
		let commandHistory = this.state.commandHistory.slice();
		let result = ''
		if (command) {
			result = `-bash: ${command}: command not found`;
		} else {
			command = '';
		}
		let commandEntry = [command, result];
		commandHistory.push(commandEntry);
		this.setState({
			value: '',
			commandHistory: commandHistory,
			commandCount: this.state.commandCount + 1
		});
	}
	prevCommand(i) {
		this.setState({
			value: this.state.commandHistory[i][0]
		});
	}
	clearCommand() {
		this.setState({
			value: ''
		});
	}
	focusInput() {
		this.setState({
			focusInput: true
		});
	}
	render() {
		return (
			<div className="terminal" onClick={this.focusInput.bind(this)}>
				<Header />
				<History
					user={this.user}
					commandHistory={this.state.commandHistory} />
				<Input
					user={this.user}
					value={this.state.value}
					focus={this.state.focusInput}
					commandHistory={this.state.commandHistory}
					clearHistory={this.clearHistory.bind(this)}
					newCommand={this.newCommand.bind(this)}
					prevCommand={this.prevCommand.bind(this)}
					clearCommand={this.clearCommand.bind(this)}
					setValue={this.setValue.bind(this)} />
			</div>
		);
	}
}
