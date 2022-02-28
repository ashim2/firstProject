import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import PACKAGE_OBJECT from '@salesforce/schema/Destination__c';
import NAME_FIELD from '@salesforce/schema/Destination__c.Name';
import EMAIL_FIELD from '@salesforce/schema/Destination__c.Destination_Image__c';
import USERNAME_FIELD from '@salesforce/schema/Destination__c.Destination_Address__c';
import { NavigationMixin } from 'lightning/navigation';

export default class Destination extends LightningElement {
    objectApiName=PACKAGE_OBJECT;

    fields = [NAME_FIELD,USERNAME_FIELD, EMAIL_FIELD];

    handleSuccess(event){
        event.preventDefault(); // stop the form from submitting
        const fields = event.detail.fields;
        this.template.querySelector('lightning-record-form').submit(fields);

        const toastEvent=new ShowToastEvent({
            title:"Destination successfully saved !",
            message: "Destination Saved ",
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
        //cpde tp dis[;ay]
    }
}