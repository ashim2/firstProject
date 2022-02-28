import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import PACKAGE_OBJECT from '@salesforce/schema/Place__c';
import NAME_FIELD from '@salesforce/schema/Place__c.Visit_Address__c';
import EMAIL_FIELD from '@salesforce/schema/Place__c.Visit_Images__c';
import USERNAME_FIELD from '@salesforce/schema/Place__c.Name';
import Destination_FIELD from '@salesforce/schema/Place__c.Destination__c';


export default class Place extends LightningElement {
    objectApiName=PACKAGE_OBJECT;

    fields = [USERNAME_FIELD, NAME_FIELD,Destination_FIELD, EMAIL_FIELD];

    handleSuccess(event){
        event.preventDefault(); // stop the form from submitting
        const fields = event.detail.fields;
        this.template.querySelector('lightning-record-form').submit(fields);

        const toastEvent=new ShowToastEvent({
            title:"Places successfully saved !",
            message: "Places Saved ",
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
        //cpde tp dis[;ay]
    }
}


