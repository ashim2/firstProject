trigger DestinationNameReq on Destination__c (before insert, before update) {
	for(Destination__c hot:trigger.new) {
        if(hot.Name==null ) {
            hot.addError('Destination Name is a required field.');
        }
    }
}