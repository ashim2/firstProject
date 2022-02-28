import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import PACKAGE_OBJECT from '@salesforce/schema/Rooms_and_Services__c';
import NAME_FIELD from '@salesforce/schema/Rooms_and_Services__c.Hotel_Detail__c';
import EMAIL_FIELD from '@salesforce/schema/Rooms_and_Services__c.Room_Availability__c';
import USERNAME_FIELD from '@salesforce/schema/Rooms_and_Services__c.Room_Number__c';
import Destination_FIELD from '@salesforce/schema/Rooms_and_Services__c.No_of_Beds__c';
import services from '@salesforce/schema/Rooms_and_Services__c.Services__c';
import price from '@salesforce/schema/Rooms_and_Services__c.Price__c';

export default class RoomsServices extends LightningElement {
    objectApiName=PACKAGE_OBJECT;

    fields = [NAME_FIELD, EMAIL_FIELD, USERNAME_FIELD, Destination_FIELD, price, services ];

    handleSuccess(event){
        // event.preventDefault(); // stop the form from submitting
        // const fields = event.detail.fields;
        // this.template.querySelector('lightning-record-form').submit(fields);

        const toastEvent=new ShowToastEvent({
            title:"Rooms and Services successfully saved !",
            message: "Services Saved ",
            variant: "success"
        });
        this.dispatchEvent(toastEvent);

    }
}


