import React from 'react';
import { Router, Route, browserHistory } from 'react-router'
import ReactDOM from 'react-dom';

import Terminal from './components/Terminal';
import ErrorPage from './components/ErrorPage';

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="app-container">
				<Terminal path={this.props.route.path}/>
			</div>
		);
	}
}

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App} />
		<Route path="/about" component={App} />
		<Route path="*" component={ErrorPage} errorCode="404" />
	</Router>,
	document.getElementById('app')
);
