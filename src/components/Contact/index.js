import React from 'react';

import NavBar from '../NavBar';

export default class ContactModal extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<NavBar />
				<h2>Contact</h2>
			</div>
		);
	}
}
