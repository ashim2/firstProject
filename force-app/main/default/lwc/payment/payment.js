import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import PACKAGE_OBJECT from '@salesforce/schema/HotelPayment__c';
import packagew from '@salesforce/schema/HotelPayment__c.Package__c';
import paymentSlip from '@salesforce/schema/HotelPayment__c.Payment_Slip__c';

export default class Payment extends LightningElement {
    objectApiName=PACKAGE_OBJECT;

    fields = [packagew, paymentSlip];

    handleSuccess(event){
        // event.preventDefault(); // stop the form from submitting
        // const fields = event.detail.fields;
        // this.template.querySelector('lightning-record-form').submit(fields);

        const toastEvent=new ShowToastEvent({
            title:"Payment successfully !",
            message: "Payment Success ",
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
        //cpde tp dis[;ay]
    }
}


