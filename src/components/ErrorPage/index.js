import React from 'react';

export default class Error extends React.Component {
	constructor(props) {
		super(props);
		this.setErrorMessage();
	}
	setErrorMessage() {
		if (this.props.route.errorCode == '404') {
			this.errorMessage = 'Page doesn\'t exist.';
		}
	}
	render() {
		return (
			<div>
				<h2>{this.props.route.errorCode}</h2>
				<p>{this.errorMessage}</p>
			</div>
		);
	}
}
