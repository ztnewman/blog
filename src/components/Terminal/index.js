import React from 'react';

import Header from './Header';
import History from './History';
import Command from './Command';

export default class Terminal extends React.Component {
	constructor() {
		super();
		this.state = {
			value: '',
			commandHistory: [/*[command, result]*/]
		}
		this.user = `${location.host}:~ guest$`;
		this.historyIndex = 0;
		this.styles = {
			height: window.innerHeight
		}
	}
	handleClick(e) {
		if (e.target.className == 'terminal') {
			this.refs.Input.focusInput();
		}
	}
	setValue(value) {
		this.setState({value});
	}

	// history navigation
	lastHistory() {
		let commandCount = this.state.commandHistory.length;
		if (commandCount > 0 && this.historyIndex < commandCount) {
			let i = commandCount-this.historyIndex-1;
			this.setState({
				value: this.state.commandHistory[i][0]
			});
			this.historyIndex++;
		}
	}
	nextHistory() {
		let commandCount = this.state.commandHistory.length;
		if (commandCount > 0 && this.historyIndex-1 > 0) {
			let i = commandCount-this.historyIndex+1;
			this.setState({
				value: this.state.commandHistory[i][0]
			});
			this.historyIndex--;
		} else if (this.historyIndex == 1) {
			this.setValue('');
			this.historyIndex--;
		}
	}
	appendHistory(value, result) {
		let commandHistory = this.state.commandHistory.slice();
		let commandEntry=[value, result];
		commandHistory.push(commandEntry);
		this.setState({
			value: '',
			commandHistory: commandHistory,
			commandCount: this.state.commandCount + 1
		});
	}

	// command routing
	handleCommand(value) {
		switch (value) {
			case 'clear':
				this.historyIndex = 0;
				this.clearHistory();
				break;
			case 'help':
				this.help();
				break;
			case '':
				this.blank();
			default:
				this.invalid(value);
		}
	}
	help() {
		let result = 'This is the help screen';
		this.appendHistory(this.state.value, result)
	}
	invalid(value) {
		let command = '';
		if  (value.indexOf(' ') !== -1) {
			command = value.substr(0, value.indexOf(' '));
		}
		else {
			command = value;
		}
		let result = `-bash: ${command}: command not found`;
		this.appendHistory(value, result);
	}
	blank() {
		this.appendHistory('', '');
	}
	clearHistory() {
		this.setState({
			value: '',
			commandHistory: []
		});
	}

	render() {
		return (
			<div
				className="terminal"
				onClick={this.handleClick.bind(this)}
				style={this.styles} >
				<Header />
				<History
					user={this.user}
					commandHistory={this.state.commandHistory} />
				<Command
					ref="Input"
					user={this.user}
					value={this.state.value}
					handleCommand={this.handleCommand.bind(this)}
					commandHistory={this.state.commandHistory}
					lastHistory={this.lastHistory.bind(this)}
					nextHistory={this.nextHistory.bind(this)}
					setValue={this.setValue.bind(this)} />
			</div>
		);
	}
}
