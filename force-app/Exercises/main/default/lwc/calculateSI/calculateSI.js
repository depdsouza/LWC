import { LightningElement } from 'lwc';

export default class CalculateSI extends LightningElement {
    principle;
    rate;
    time;
    result=0;

    handlePrinciple(event){
        this.principle=parseInt(event.target.value);
    }

    handleRate(event){
        this.rate=parseInt(event.target.value);
    }

    handleTime(event){
        this.time=parseInt(event.target.value);
    }

    calculate(){
        this.result=(this.principle * this.rate * this.time)/100;
    }
}