
const currentDate = new Date();

export default class Clock {
	constructor() {
		this.day = this.getDay();
		this.month = this.getMonth();
		this.date = this.getDate();
		this.hour = this.getHour();
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
	get time() {
		return `${this.day} ${this.month} ${this.date} ${this.hour}`;
	}
}
