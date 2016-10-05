import React from 'react';

import AboutModal from './AboutModal';

const modalStyles = {
	content: {
		top: '0',
    	left: '0',
		bottom: '0',
		right: '0',
		border: '10px solid ',
		borderRadius: '0',
		padding: '20px'
	}
}

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			aboutModalIsOpen: false
		}
	}
	openAboutModal() {
		this.setState({
			aboutModalIsOpen: true
		});
	}
	closeAboutModal() {
		this.setState({
			aboutModalIsOpen: false
		});
	}
	render() {
		return (
			<div>
				<button onClick={this.openAboutModal.bind(this)}>About</button>
				<AboutModal
					modalIsOpen={this.state.aboutModalIsOpen}
					closeModal={this.closeAboutModal.bind(this)}
					modalStyles={modalStyles}
					borderColor='red' />
			</div>
		);
	}
}
