import { LightningElement } from 'lwc';

export default class Challenge_dateTime extends LightningElement {
	currentDate = new Date();
	updateDate() {
		this.currentDate = new Date();
	}
	
	
	connectedCallback() {
		
		setInterval(() => {
			this.currentDate = new Date();
		}, 1000);
	}
}