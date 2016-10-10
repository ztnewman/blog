import React from 'react';

import Help from './Output/Help';
import Invalid from './Output/Invalid';

export default class History extends React.Component {
	constructor(props) {
		super(props);
		this.currentDirectory = props.currentDirectory;
		this.user = this.props.getUser();
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
