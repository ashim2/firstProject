import { LightningElement, track, api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import PACKAGE_OBJECT from '@salesforce/schema/Package__c';
import NAME_FIELD from '@salesforce/schema/Package__c.Name';
import EMAIL_FIELD from '@salesforce/schema/Package__c.Email__c';
import USERNAME_FIELD from '@salesforce/schema/Package__c.User_Name__c';
import PLACE_FIELD from '@salesforce/schema/Package__c.Place__c';
import HOTEL_FIELD from '@salesforce/schema/Package__c.Hotel_Detail__c';
import DESTINATION_FIELD from '@salesforce/schema/Package__c.Destination__c';
import CHECKIN_FIELD from '@salesforce/schema/Package__c.Check_In__c';
import CHECKOUT_FIELD from '@salesforce/schema/Package__c.Check_Out__c';
import ROOMSANDSERVICES_FIELD from '@salesforce/schema/Package__c.Rooms_and_Services__c';
import PHONENUMBER_FIELD from '@salesforce/schema/Package__c.User_Phone_Number__c';
import { NavigationMixin } from 'lightning/navigation';

export default class Packagelwc extends LightningElement {
    objectApiName=PACKAGE_OBJECT;
    // fieldUserName = USERNAME_FIELD;
    // fieldEmail = EMAIL_FIELD;
    // fieldDestination = DESTINATION_FIELD;
    // fieldPlace = PLACE_FIELD;
    // fieldHotel = HOTEL_FIELD;
    // fieldName = NAME_FIELD;
    // fieldPhone = PHONENUMBER_FIELD;
    // fieldRooms = ROOMSANDSERVICES_FIELD;
    // fieldCheckIn = CHECKIN_FIELD;
    // fieldCheckOut = CHECKOUT_FIELD;

    fields = [USERNAME_FIELD, PHONENUMBER_FIELD,EMAIL_FIELD,NAME_FIELD, DESTINATION_FIELD, PLACE_FIELD, HOTEL_FIELD, ROOMSANDSERVICES_FIELD, CHECKIN_FIELD, CHECKOUT_FIELD];

    handleSuccess(event){
        event.preventDefault(); // stop the form from submitting
        const fields = event.detail.fields;
        this.template.querySelector('lightning-record-form').submit(fields);

        const toastEvent=new ShowToastEvent({
            title:"Package has been created successfully !",
            message: "Package Created ",
            variant: "success"
        });

        this.dispatchEvent(toastEvent);
        
        // setTimeout(()=>{this.handleNav()},3000);

    }

    handleError(event) {
       var abc = JSON.stringify(event.detail.detail);
        const toastEvent=new ShowToastEvent({
            title:"Error !",
            message: abc,
            variant: "warning"
        });
        console.log("handleError event");
        console.log(JSON.stringify(event.detail));
    }

    // handleNav(){
    //     this[NavigationMixin.Navigate]({
    //         type: 'standard__objectPage',
    //         attributes: {
    //             objectApiName: PACKAGE_OBJECT,
    //             actionName: 'list'
    //         },
    //         state: {
    //             // 'filterName' is a property on the page 'state'
    //             // and identifies the target list view.
    //             // It may also be an 18 character list view id.
    //             filterName: 'Recent' // or by 18 char '00BT0000002TONQMA4'
    //         }
    //     });
    // }
}


