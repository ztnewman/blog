import React from 'react';

import Invalid from './Output/Invalid';
import Help from './Output/Help';
import ChangeDirectory from './Output/ChangeDirectory';

export default class History extends React.Component {
	constructor(props) {
		super(props);
		this.user = props.user;
		this.invalidCounter = 0;
	}
	incrementInvalid() {
		this.invalidCounter++;
		if (this.invalidCounter == 3) {
			this.props.showHelp();
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
								{(() => {
									let cmd = value;
									if (cmd.indexOf(' ') !== -1) {
										cmd = cmd.substr(0, cmd.indexOf(' '));
									}
							    	switch (cmd) {
							        	case 'help':
											return <Help />;
											break;
										case 'cd':
											return <ChangeDirectory
													value={value} />;
											break;
										case 'git':
											window.location.href = 'https://github.com/getmicah';
											return "Adios!";
											break;
										case '':
											return;
											break;
										default:
											return <Invalid
													command={cmd}
													increment={this.incrementInvalid.bind(this)} />;
							    	}
							    })()}
							</div>
						</div>
					);
				}.bind(this))}
			</div>
		);
	}
}
