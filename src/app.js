import React from 'react';
import { Router, Route, browserHistory } from 'react-router'
import ReactDOM from 'react-dom';

import Terminal from './components/Terminal';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';

class App extends React.Component {
	render() {
		const { nav, main } = this.props
		return (
			<div>
				<Terminal />
				{main}
			</div>
		);
	}
}

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="about" components={{main:About}} />
			<Route path="contact" components={{main:Contact}} />
			<Route path="*" components={{main:Error}} errorCode="404" />
		</Route>
	</Router>,
	document.getElementById('app')
);
