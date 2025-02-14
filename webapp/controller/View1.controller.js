sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";
    var that;
    return Controller.extend("testproject1.controller.View1", {
        onInit() {
            that = this;
            if (!that.create) {
                that.create = sap.ui.xmlfragment("testproject1.view.create", that);
            }
          
        },
        openDialog:function()
        {
            
            that.create.open()
            that.updateProgressIndicator()
        },
        updateProgressIndicator:function()
        {
            sap.ui.getCore().byId("pi-with-animation").setDisplayValue("50%")
            sap.ui.getCore().byId("pi-with-animation").setPercentValue(+50);
        }
    });
});