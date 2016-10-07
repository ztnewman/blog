import React from 'react';
import { Router, Route, browserHistory } from 'react-router'
import ReactDOM from 'react-dom';

import Terminal from './components/Terminal';
import ErrorPage from './components/ErrorPage';

class App extends React.Component {
	constructor() {
		super();
		this.styles = {
			height: window.innerHeight
		}
	}
	render() {
		const { nav, main } = this.props
		return (
			<div className="app-container" style={this.styles}>
				<Terminal />
				{main}
			</div>
		);
	}
}

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>

		</Route>
		<Route path="*" component={ErrorPage} errorCode="404" />
	</Router>,
	document.getElementById('app')
);
