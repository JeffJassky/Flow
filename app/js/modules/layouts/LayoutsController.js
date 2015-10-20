App.module('Layouts', function(Layouts, App){
    'use strict';
    var activeLayoutName = null;

    var layoutConfigurations = {
        'fullscreen': 'Fullscreen',
        'admin': 'Admin'
    };

    Layouts.Controller = {
        switch: function(layoutName) {
            if(layoutConfigurations.hasOwnProperty(layoutName)){
                if(activeLayoutName != layoutName){
                    App.mainContainer.show(
                        new Layouts.LayoutViews[layoutConfigurations[layoutName]]()
                    );
                    activeLayoutName = layoutName;
                }
                return true;
            }else{
                console.warn('No layout found for ' + layoutName);
                return false;
            }
        },
        getCurrentLayout: function(){
            return activeLayoutName;
        }
    };

});