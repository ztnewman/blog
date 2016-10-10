import React from 'react';
import { Router, Route, browserHistory } from 'react-router'
import ReactDOM from 'react-dom';

import Terminal from './components/Terminal';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.path = this.getPath(props.params.path);
	}
	getPath(path) {
		if (path)
			return path;
		return '~';
	}
	render() {
		return (
			<div className="app-container">
				<Terminal path={this.path} />
			</div>
		);
	}
}

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path=":path" component={App} />
		</Route>
	</Router>,
	document.getElementById('app')
);
