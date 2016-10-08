import React from 'react';

import About from './About';

export default class ChangeDirectory extends React.Component {
	constructor(props) {
		super(props);
		this.directory = props.value;
	}
	render() {
		return(
			`cd ${this.directory}`
		);
	}
}
