import React from 'react';

import Help from './Output/Help';
import Invalid from './Output/Invalid';

export default class History extends React.Component {
	constructor(props) {
		super(props);
		this.currentDirectory = props.currentDirectory;
		this.user = this.props.getUser();
	}
	changeDirectory(value) {
		if (value.indexOf(' ') !== -1) {
			let newDir = value.split(' ').slice(1,3)[0];
			if (newDir.charAt(0) == '/') {
				newDir = newDir.substr(1, newDir.length);
				if (this.props.isValidDirectory(newDir)) {
					console.log('cd: ' + newDir);
					return null;
				} else {
					return 'invalid directory';
				}
			}
		} else {
			this.props.cd('~');
			return null;
		}
	}
	getOutput(value) {
		let cmd = value;
		if (cmd.indexOf(' ') !== -1) {
			cmd = cmd.substr(0, cmd.indexOf(' '));
		}
		switch (cmd) {
			case 'help':
				return <Help />;
				break;
			case 'git':
				window.location.href = 'https://github.com/getmicah';
				return "Adios!";
				break;
			case 'cd':
				return this.changeDirectory(value);
			case '':
				return null;
				break;
			default:
				return <Invalid
						command={cmd}
						value={value} />;
		}
	}
 	render() {
		return(
			<div className="terminal__history">
				{this.props.commandHistory.map(function(value, i){
					return (
						<div key={i}>
							<span>{this.user}</span>
							<span className="terminal__history__command">
								{value}
							</span>
							<div className="terminal__history__output">
								{this.getOutput(value)}
							</div>
						</div>
					);
				}.bind(this))}
			</div>
		);
	}
}
