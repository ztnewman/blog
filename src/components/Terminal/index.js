import React from 'react';

import Header from './Header';
import History from './History';
import Input from './Input';

export default class Terminal extends React.Component {
	constructor() {
		super();
		this.state = {
			value: '',
			commandHistory: []
		}
		this.user = `${location.host}:~ guest$`;
		this.historyIndex = 0;
	}
	setValue(value) {
		this.setState({value});
	}
	handleClick(e) {
		if (e.target.className == 'terminal') {
			this.refs.Input.focusInput();
		}
	}
	handleCommand(value) {
		console.log(typeof value);
		if (value == 'clear') {
			this.historyIndex = 0;
			this.clearHistory();
		} else {
			this.appendHistory(value);
		}
	}

	// history
	lastHistory() {
		let commandCount = this.state.commandHistory.length;
		if (commandCount > 0 && this.historyIndex < commandCount) {
			let i = commandCount-this.historyIndex-1;
			this.setState({
				value: this.state.commandHistory[i]
			});
			this.historyIndex++;
		}
	}
	nextHistory() {
		let commandCount = this.state.commandHistory.length;
		if (commandCount > 0 && this.historyIndex-1 > 0) {
			let i = commandCount-this.historyIndex+1;
			this.setState({
				value: this.state.commandHistory[i]
			});
			this.historyIndex--;
		} else if (this.historyIndex == 1) {
			this.setValue('');
			this.historyIndex--;
		}
	}
	appendHistory(value) {
		let commandHistory = this.state.commandHistory.slice();
		commandHistory.push(value);
		this.setState({
			value: '',
			commandHistory: commandHistory,
			commandCount: this.state.commandCount + 1
		});
	}
	clearHistory() {
		this.setState({
			value: '',
			commandHistory: []
		});
	}

	render() {
		return (
			<div className="terminal" onClick={this.handleClick.bind(this)} >
				<Header />
				<History
					user={this.user}
					commandHistory={this.state.commandHistory} />
				<Input
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
