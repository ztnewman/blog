import React from 'react';

import Invalid from './Output/Invalid';
import Help from './Output/Help';

export default class History extends React.Component {
	constructor(props) {
		super(props);
		this.user = props.user;
	}
	render() {
		console.log(this.props.commandHistory[0]);
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
							    	switch (value) {
							        	case 'help':
											return <Help />;
										case '':
											return;
										default:
											return <Invalid value={value}/>;
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
