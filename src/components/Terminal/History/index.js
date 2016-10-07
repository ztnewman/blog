import React from 'react';

export default class History extends React.Component {
	constructor(props) {
		super(props);
		this.user = props.user;
	}
	render() {
		return(
			<div className="terminal__history">
				{this.props.commandHistory.map(function(command, i){
					return (
						<div key={i}>
							<span>{this.user}</span>
							<span className="terminal__history__command">
								{command[0]}
							</span>
							<span className="terminal__history__results">
								{command[1]}
							</span>
						</div>
					);
				}.bind(this))}
			</div>
		);
	}
}
