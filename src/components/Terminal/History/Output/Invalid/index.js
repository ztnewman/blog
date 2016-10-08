import React from 'react';

export default class Invalid extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<span>{`-bash: ${this.props.command}: command not found`}</span>
		);
	}
}
