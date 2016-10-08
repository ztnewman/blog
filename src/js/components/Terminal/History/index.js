import React from 'react';

import Invalid from './Output/Invalid';
import Help from './Output/Help';
import About from './Output/About';

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
										case 'about':
											return <About />;
										case 'git':
											window.location.href = 'https://github.com/getmicah';
										case '':
											return;
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
