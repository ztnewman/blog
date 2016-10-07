import React from 'react';
import { Link } from 'react-router';

import Clock from './lib/Clock';

export default class Terminal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			commandHistory: []
		}
		this.user = `${location.host}:~ guest$`;
		this.time = new Clock().time;
	}
	handleChange(e) {
		this.setState({
			value: e.target.value
		});
	}
	handleKeyDown(e) {
		switch (e.keyCode) {
			case 13: //Enter
				e.preventDefault();
				this.enterCommand();
				break;
			case 38: //Up
				e.preventDefault();
				this.previousCommand();
				break;
		}
	}
	enterCommand() {
		switch (this.state.value) {
			case 'clear':
				// clear terminal
				this.setState({
					value: '',
					commandHistory: []
				});
				break;
			default:
				this.setState({
					value: '',
					commandHistory: this.state.commandHistory.concat([this.state.value])
				});
		}
	}
	previousCommand() {
		let commandCount = this.state.commandHistory.length;
		if (commandCount > 0) {
			this.setState({
				value: this.state.commandHistory[commandCount-1]
			});
		}
	}
	render() {
		return (
			<div className="terminal">
				<div className="terminal__time">
					Last login: {this.time} on ttys001
				</div>
				<div className="terminal__history">
		        	{this.state.commandHistory.map(function(command, i){
		    			return (
							<div key={i}>
								<span>{this.user}</span>
								<span className="terminal__history__entry">
									{command}
								</span>
							</div>
						);
		        	}.bind(this))}
		        </div>
				<div className="terminal__command">
					<span className="terminal__command__user">{this.user}</span>
					<input
						className="terminal__command__input"
				    	type="text"
				    	value={this.state.value}
				    	onChange={this.handleChange.bind(this)}
						onKeyDown={this.handleKeyDown.bind(this)}
						autoFocus
					/>
				</div>
			</div>
		);
	}
}
