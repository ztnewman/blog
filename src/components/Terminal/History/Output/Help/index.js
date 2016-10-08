import React from 'react';

export default class Help extends React.Component {
	render() {
		return(
			<div className="terminal__history__output__help">
				<p>Hello there,</p>
				<p>This is my website.</p>
				<p>To interact with it you must enter in commands.</p>
				<p>Some commands available to you are:</p>
				<ul>
					<li>ls</li>
					<li>cd</li>
					<li>clear</li>
					<li>cat</li>
				</ul>
			</div>
		);
	}
}
