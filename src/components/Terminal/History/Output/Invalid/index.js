import React from 'react';

export default class Invalid extends React.Component {
	constructor(props) {
		super(props);
		this.result = this.getResult(props.value);
	}
	getResult(value) {
		let command = '';
		if  (value.indexOf(' ') !== -1) {
			command = value.substr(0, value.indexOf(' '));
		}
		else {
			command = value;
		}
		return `-bash: ${command}: command not found`;
	}
	render() {
		return(
			<span>{this.result}</span>
		);
	}
}
