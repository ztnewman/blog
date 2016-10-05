import React from 'react';
import Modal from 'react-modal';

export default class AboutModal extends React.Component {
	constructor(props) {
		super(props);
		this.props.modalStyles.content.border += this.props.borderColor;
	}
	afterOpenModal() {
		this.refs.subtitle.style.color = 'f00';
	}
	closeModal() {
		this.props.closeModal();
	}
	render() {
		return (
			<Modal
				isOpen={this.props.modalIsOpen}
				onAfterOpen={this.afterOpenModal.bind(this)}
				onRequestClose={this.closeModal.bind(this)}
				style={this.props.modalStyles} >
				<h2 ref="subtitle">About Me</h2>
				<button onClick={this.closeModal.bind(this)}>close</button>
			</Modal>
		);
	}
}
