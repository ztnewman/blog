import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header/index.js'
import About from './components/About/index.js'


class App extends React.Component {
	render() {
		return (
			<div>
				<Header name="Micah Cowell" />
				<About />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
