trigger PaymentSlipRequired on HotelPayment__c (before insert, before update) {
	for(HotelPayment__c hot:trigger.new) {
        if(hot.Payment_Slip__c==null ) {
            hot.addError('Payment Slip is a required field.');
        }
    }
}