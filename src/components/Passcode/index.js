import React from 'react';
import CodeInput from './CodeInput';

export default class Passcode extends React.Component {
	constructor(props) {
		super(props);
		this.sequence = '0 1 3 7';
		this.state = {
			formValue: null,
			isAuthenticated: false
		}
	}
	handleFormChange(e) {
		this.setState({
			formValue: e.target.value
		});
		this.authenticate(e.target.value);
	}
	authenticate(value) {
		const possibleAnswers = [
			'2x+1',
			'2x + 1'
		]
		if (possibleAnswers.indexOf(value) > -1) {
			this.props.onAuthentication();
		}
	}
	render() {
		return (
			<div>
				<h1>Hello, World</h1>
				<p>Before you may enter this domain, you must first prove your worthyness by cracking the sequence:</p>
				<p>{this.sequence}</p>
				<CodeInput value={this.state.formValue} onChange={this.handleFormChange.bind(this)} />
			</div>
		);
	}
}
