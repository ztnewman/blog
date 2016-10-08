import React from 'react';

const currentDate = new Date();

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.time = `${this.getDay()} ${this.getMonth()} ${this.getDate()} ${this.getHour()}`;
	}
	getDay() {
		const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
 		return days[currentDate.getDay()];
	}
	getMonth() {
		const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		return months[currentDate.getMonth()];
	}
	getDate() {
		let date = currentDate.getDate();
		if (date < 10) {
			return date = ` ${date}`;
		}
		return date;
	}
	getHour() {
		return `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
	}
	render() {
		return(
			<div className="terminal__header">
				<span className="terminal__header__time">Last login: {this.time} on ttys001</span>
			</div>
		);
	}
}
