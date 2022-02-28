({
   
    openEventPopup : function(component, event, helper) {
        var modalFade = component.find('modalFade');
        var modalBackdrop = component.find('modalBackdrop');
        
        $A.util.addClass(modalFade,'slds-fade-in-open');
        $A.util.addClass(modalBackdrop,'slds-backdrop_open');
    },
    
    
})