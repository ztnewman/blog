import React from 'react';

import Header from './Header';
import History from './History';
import Input from './Input';
import Invalid from './History/Output/Invalid';

const FOLDERS = ['~', 'about', 'contact'];

export default class Terminal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			commandHistory: []
		}
		this.currentDirectory = props.path;
		this.historyIndex = 0;
	}
	setValue(value) {
		this.setState({value});
	}
	setCurrentDirectory(dir) {
		this.currentDirectory = dir;
	}
	isValidDirectory(dir) {
		if (!dir)
			dir = this.currentDirectory;
		return FOLDERS.indexOf(dir) > -1;
	}
	getUser() {
		if (this.isValidDirectory() && this.currentDirectory != '~') {
			return `guest@${location.host}:~/${this.currentDirectory}$`
		} else {
			return `guest@${location.host}:~$`;
		}
	}

	// handlers
	handleKeyDown(e) {
		this.refs.Input.focusInput();
	}
	handleCommand(value) {
		let cmd = value;
		if (cmd.indexOf(' ') !== -1) {
			cmd = cmd.substr(0, cmd.indexOf(' '));
		}
		switch (cmd) {
			case 'clear':
				this.historyIndex = 0;
				this.clearHistory();
				break;
			default:
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
			<div
				className="terminal"
				tabIndex="1"
				onKeyDown={this.handleKeyDown.bind(this)} >
				<Header />
				{this.isValidDirectory(this.props.path) ? null :
					<div className="terminal__invalidDirectory">
						<Invalid
							command="cd"
							value={`${this.props.path}`} />
					</div>}
				<History
					commandHistory={this.state.commandHistory}
					currentDirectory={this.currentDirectory}
					cd={this.setCurrentDirectory.bind(this)}
					isValidDirectory={this.isValidDirectory.bind(this)}
					getUser={this.getUser.bind(this)} />
				<Input
					ref="Input"
					value={this.state.value}
					getUser={this.getUser.bind(this)}
					handleCommand={this.handleCommand.bind(this)}
					commandHistory={this.state.commandHistory}
					lastHistory={this.lastHistory.bind(this)}
					nextHistory={this.nextHistory.bind(this)}
					setValue={this.setValue.bind(this)} />
			</div>
		);
	}
}
