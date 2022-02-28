import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import PACKAGE_OBJECT from '@salesforce/schema/Hotel_Detail__c';
import NAME_FIELD from '@salesforce/schema/Hotel_Detail__c.Name';
import address_FIELD from '@salesforce/schema/Hotel_Detail__c.Hotel_Address__c';
import USERNAME_FIELD from '@salesforce/schema/Hotel_Detail__c.Hotel_Owner_Name__c';
import email from '@salesforce/schema/Hotel_Detail__c.Email__c';
import phone from '@salesforce/schema/Hotel_Detail__c.Phone__c';
import destination from '@salesforce/schema/Hotel_Detail__c.Destination__c';
import touristPlace from '@salesforce/schema/Hotel_Detail__c.Near_By_Tourist_Place__c';
import image from '@salesforce/schema/Hotel_Detail__c.Hotel_Images__c';

export default class Hotel extends LightningElement {
    objectApiName=PACKAGE_OBJECT;

    fields = [NAME_FIELD, address_FIELD ,USERNAME_FIELD, email, phone, destination, touristPlace, image];

    handleSuccess(event){
        event.preventDefault(); // stop the form from submitting
        const fields = event.detail.fields;
        this.template.querySelector('lightning-record-form').submit(fields);

        const toastEvent=new ShowToastEvent({
            title:"Hotel Details successfully saved !",
            message: "Details Saved ",
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
        //cpde tp dis[;ay]
    }
}