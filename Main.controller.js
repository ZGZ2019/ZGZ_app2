sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    'use strict';
    return Controller.extend("webapp.Main",{
        //Event handler
        onPress: function(){
            //Step 1: get the object of our view
            var oView = this.getView();
            //Step 2: get the object of image which is inside the view
            //DEV 1 add @D1
            var oSpidy = oView.byId("idSpiderman");
            //Step 3: make the image visible
            oSpidy.setVisible(true);
        }
    });
});