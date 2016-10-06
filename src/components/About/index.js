import React from 'react';

import NavBar from '../NavBar';

export default class AboutModal extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<NavBar />
				<h2>About</h2>
			</div>
		);
	}
}
