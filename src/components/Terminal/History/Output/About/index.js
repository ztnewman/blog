import React from 'react';

export default class About extends React.Component {
	render() {
		return(
			<div className="terminal__history__output__about">
				<p>
					Hello, my name is Micah Cowell. I am a self proclaimed web developer who likes the internet, hip hop, and fancy yo-yos.
				</p>
				<p>
					<b>What do you do?</b>
					I make websites and stuff. All the code I write is on my <a href="https://github.com/getmicah">Github</a>.
				</p>
				<p>
					<b>What programming languages do you use?</b>
					When making websites I like using Javascript and Sass. I also like Python and making linux scripts.
				</p>

			</div>
		);
	}
}
