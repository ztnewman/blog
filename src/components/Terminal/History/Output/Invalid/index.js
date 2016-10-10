import React from 'react';

export default class Invalid extends React.Component {
	constructor(props) {
		super(props);
		this.command = props.command;
		this.value = props.value;
	}
	getError() {
		if (this.command == 'cd') {
			return `${this.props.value}: No such file or directory`;
		}
		return 'command not found';
	}
	render() {
		return(
			<span>-bash: {this.command}: {this.getError()}</span>
		);
	}
}
