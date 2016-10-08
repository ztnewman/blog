import React from 'react';
import ReactDOM from 'react-dom';

export default class Input extends React.Component {
	constructor(props) {
		super(props);
		this.user = props.user;
	}
	handleChange(e) {
		this.props.setValue(e.target.value);
	}
	handleKeyDown(e) {
		switch (e.keyCode) {
			case 13: //Enter
				e.preventDefault();
				this.props.handleCommand(this.props.value);
				break;
			case 38: //Up
				e.preventDefault();
				this.props.lastHistory();
				break;
			case 40: //Down
				e.preventDefault();
				this.props.nextHistory();
				break;
		}
	}
	getInputLength() {
		if (this.props.value.length > 0) {
			return this.props.value.length;
		}
		return 1;
	}
	focusInput() {
		ReactDOM.findDOMNode(this.refs.commandInput).focus();
	}
	render() {
		return(
			<div className="terminal__command">
				<span className="terminal__command__user">{this.user}</span>
				<input
					className={this.props.value ? "terminal__command__input" : "terminal__command__input empty"}
					ref="commandInput"
					type="text"
					value={this.props.value}
					size={this.props.value.length}
					onChange={this.handleChange.bind(this)}
					onKeyDown={this.handleKeyDown.bind(this)}
					autoComplete={false}
					autoCorrect={false}
					spellCheck={false}
					autoFocus />
				<span className="terminal__command__caret">&nbsp;</span>
			</div>
		);
	}
}
