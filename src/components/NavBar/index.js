import React from 'react';
import { Link } from 'react-router';

export default class NavBar extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/contact'>Contact</Link>
			</div>
		);
	}
}
